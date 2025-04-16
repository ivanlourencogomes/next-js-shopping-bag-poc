import styles from './products.module.css';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

async function Products() {
    let products = [];

    try {
        const data = await fetch('https://dummyjson.com/products?sortBy=rating&order=desc&limit=12&skip=0');
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const json = await data.json();
        products = json.products;
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }

    return ( 
        <div className={styles.products}>
            <div className={`${styles.wrapper} container`}>
                <h2>Highest Rated Products</h2>
                
                {products.length > 0 ? (
                    <>
                        <p>
                            Check out below a curated list of
                            the products that received the highest ratings from our 
                            customers
                        </p>
                        <ul className={styles['products-list']}>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Sorry, we couldn't load the products at this time. Please try again later.</p>
                )}
                <Link href="/products">
                    <button>
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Products;
