'use client'
import styles from './productList.module.css';
import { useRouter } from 'next/navigation';
import CategoryFilter from './CategoryFilter';
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';

function ProductList({selectedCategory}) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  console.log('totalProducts', totalProducts);


  async function fetchProducts(limit=8, skip=0) {

    const res = await fetch(`https://dummyjson.com/products${selectedCategory ? '/category/' + selectedCategory : ''}?skip=${skip}&limit=${limit}`);
    const data = await res.json();
    setProducts([...products, ...data.products]);
    setTotalProducts(data.total)
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleSetCategory(category){
    router.push(`/products/${category}`);
  }

  async function handleLoadMore(category){
    fetchProducts(8, products.length)
  }


  return (
    <div className={`${styles['product-list']} container`}>
      <CategoryFilter setCategory={handleSetCategory} activeCategory={selectedCategory}  />

      {
        products.length ?
        <ul className={styles.products}>
          {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} />
          ))}
        </ul> : (
          <p className={styles.error}>
            Sorry, we couldn't load the products at this time. Please try again later.
          </p>
        )


      }
      {
        products.length < totalProducts ?
        <button onClick={handleLoadMore} className={styles.load}>
          Load More
        </button> : ''

      }

    </div>
  )
}

export default ProductList
