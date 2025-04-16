'use client';
import { useState } from "react";
import { useBasket } from "@/app/context/BasketContext";
import Link from "next/link";

function AddToBag({styles, stock, product}) {

    
    const { items, addToBag, updateQuantity, removeFromBag } = useBasket();
    const itemInBag = items.find(item => item.id === product.id);
    const [quantity, setQuantity] = useState(itemInBag ? itemInBag.quantity : 1);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) return; // Prevent quantity less than 1
        if (newQuantity > stock) return; // Prevent quantity more than stock
        setQuantity(newQuantity);
        if (itemInBag) {
          updateQuantity(product, newQuantity);
        }
      };

  return (
    <div className={styles['add-to-bag']}>
      {product.stock ? (
        <>
          <div className={styles.quantity}>
            <button 
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="minimal"
            >
              -
            </button>
            <input disabled value={quantity} />
            <button  
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= stock}
              className="minimal"
            >
              +
            </button>
          </div>

          {itemInBag ? (
            <div className={styles.actions}>
              <p>Added to Basket!</p>
              <button className="outline" onClick={() => removeFromBag(product.id)}>Remove</button>
              <Link href="/basket"><button className="outline">View Basket</button></Link>
            </div>
          ) : (
            <button onClick={() => addToBag(product, quantity)}>Add to Bag</button>
          )}
        </>
      ) : (
        <p>We're sorry, but this item is not available.</p>
      )}
    </div>
  )
}

export default AddToBag
