import styles from './pageHeader.module.css';

function PageHeader({title, theme}) {
  return (
    <div className={`${styles['page-header']} ${styles[theme]}`}>
      <h1>{ title }</h1>
    </div>
  )
}

export default PageHeader
