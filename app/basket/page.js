import styles from './basket.module.css';
import PageHeader from '../components/PageHeader';
import BasketItems from './BasketItems';

function Page() {
  return (
    <div className={`${styles.basket}`}> 
        <PageHeader title="Shopping Bag" theme="dark"  />
        <BasketItems styles={styles} />
    </div>
  )
}

export default Page
