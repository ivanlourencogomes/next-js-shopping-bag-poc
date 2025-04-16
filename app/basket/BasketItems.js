'use client';
import { useBasket } from "../context/BasketContext";
import { formatPrice } from "../util";
import Link from "next/link";

function BasketItems({styles}) {

    const { items, updateQuantity, removeFromBag, clearBag } = useBasket();

    const calculateTotal = () => {
        return formatPrice (items.reduce((total, item) => total + item.price * item.quantity, 0));
    };
    
    function handleRemoveItem(itemId){
        if(confirm("Are you sure you want to remove this item from the basket?")){
            removeFromBag(itemId);
        }
    }

    function handleClearBag(){
        if(confirm("Are you sure you want to delete all items from the basket?")){
            clearBag();
        }
    }

    return (
        <main className="container">
            
            {
                items.length ?
                <>
                    <table className={styles["shopping-bag-table"]}>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.thumbnail} alt={item.name} width={50} height={50} />
                                </td>
                                <td>
                                    <Link href={`/product/${item.id}`}>{item.title}</Link>
                                </td>
                                <td>
                                    {formatPrice(item.price)}
                                </td>
                                <td class={styles.quantity}>
                                    <div className={styles["actions"]}>
                                        <button
                                            className={styles.qty}
                                            onClick={() => updateQuantity(item, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input type="text" value={item.quantity} disabled />
                                        <button
                                            className={styles.qty}
                                            onClick={() => updateQuantity(item, item.quantity + 1)}
                                            disabled={item.quantity >= item.stock}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles["stock"]}>
                                        {item.stock} items in stock
                                    </div>
                                </td>
                                <td>
                                    {formatPrice(item.price * item.quantity)}
                                </td>
                                
                                <td>
                                    <button title="Remove from basket" className="transparent" onClick={() => handleRemoveItem(item.id)}> &#x2715; </button>
                                </td>
                            </tr>
                            ))}
                            <tr class={styles['grand-total']}>
                                <td colspan="4"></td>
                                <td  colspan="2">
                                Grand Total: {calculateTotal()}
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                    
                    <section className={styles['basket-options']}>
                       
                        <button onClick={handleClearBag} className="outline">
                            Clear Cart
                        </button>
                        
                        <Link href="/products">
                            <button className="outline">
                                Continue Shopping
                            </button>
                        </Link>

                        <button onClick={()=>alert('Congrats, you finished the process!')}>
                            Proceed to Checkout
                        </button>
                    </section>
                </>
            
            :

                <div className={styles['empty-basket']}>
                    <h3>Your basket is empty!</h3>
                    <p>
                        <Link href="/products">Click here</Link>  to start shopping.
                    </p>

                </div>

            }

           
        </main>
      );
}

export default BasketItems
