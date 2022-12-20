import styles from './Spinner.module.scss'

export default function Spinner() {
  return (
    <div className={styles.box}>
      <div className={styles["loader-16"]}></div>
    </div>
  )
}

