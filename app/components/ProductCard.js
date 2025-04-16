import styles from './productCard.module.css';
import Link from 'next/link';
import { formatPrice } from '../util';

function ProductCard({product}) {
  return ( 
    <Link href={`/product/${product.id}`}>
      <li className={styles['product-card']}>
          {/* <div className={styles.rating}>&#9733; {product.rating} / 5.0</div> */}
          <img src={product.thumbnail} alt="product" />
          <div className={styles.info}>
              <h3>{product.title}</h3>
              <p>{formatPrice(product.price)}</p>
          </div>
      </li>
    </Link>
  )
}

export default ProductCard
