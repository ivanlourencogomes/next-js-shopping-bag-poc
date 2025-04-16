import styles from './hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <img src="/hero.jpg" alt="hero image" />
    </div>
  )
}

export default Hero
