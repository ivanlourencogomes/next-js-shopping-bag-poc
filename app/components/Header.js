'use client';
import { useBasket } from '../context/BasketContext';

import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {

    const { items } = useBasket();

  return (
    <header className={styles['app-header']}>
        <div className={`${styles.wrapper} container`}>
            <aside>
                <Link href="/">
                    <img src="/next-logo.png" alt="Site logo" />
                </Link>
            </aside>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li className={styles.basket}>
                        <Link href="/basket">
                            Shopping Bag 
                            {
                                items.length ?
                                <span>{items.length}</span> :
                                ''
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
