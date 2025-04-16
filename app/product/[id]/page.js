import styles from './page.module.css?v=2';
import { formatPrice } from '@/app/util';
import AddToBag from './AddToBag';

async function Page({ params }) {
    const { id } = params;
    let product = null;

    try {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        product = await data.json();
    } catch (error) {
        console.error('Failed to fetch product:', error);
    }

    if (!product) {
        return (
            <div className={`${styles['product-page']} container`}>
                <p>Sorry, we couldn't load the product details at this time. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className={`${styles['product-page']} container`}>
            <section className={styles.photo}>
                <img src={product.images[0]} alt={product.title} />
            </section>
            <section className={styles.info}>
                <h1>{product.title}</h1>
                <p className={styles.price}>{formatPrice(product.price)}</p>
                <p>{product.description}</p>
                <AddToBag product={product} stock={product.stock} styles={styles} />
                {product.stock ? (
                    <>
                        <p className={styles.small}>{product.stock} items left in stock</p>
                        <p><b>Delivery:</b> {product.shippingInformation}</p>
                        <p><b>Returns:</b> {product.returnPolicy}</p>
                    </>
                ) : (
                    <p className={styles.outOfStock}>Out of stock</p>
                )}
            </section>
        </div>
    );
}

export default Page;
