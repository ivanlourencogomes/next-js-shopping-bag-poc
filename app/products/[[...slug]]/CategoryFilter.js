'use client';
import { useEffect, useState } from 'react';

import styles from './categoryFilter.module.css';

function CategoryFilter({setCategory, activeCategory}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
          const res = await fetch('https://dummyjson.com/products/categories');
          const data = await res.json();
          setCategories(data);
        }
    
        fetchCategories();
      }, []);

  return (
    <ul className={styles['category-filter']}> 
      {categories.length ? categories.map((category) => (
            <li 
                className={category.slug === activeCategory ? styles.active : ''} 
                onClick={() => setCategory(category.slug)} key={category.slug} >
                {category.name}
            </li>
        )) : ''}
    </ul>
  )
}

export default CategoryFilter
