import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles['app-footer']}>
      © {new Date().getFullYear()} All Rights Reserved
    </footer>
  )
}

export default Footer
