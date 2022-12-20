import styles from './Icons.module.scss';

export default function Icons({ link, path, alt }) {
  return (
    <li className={styles.menu__item}>
      <img src={path} alt={alt} />
      <a href="/">{link}</a>
    </li>
  )
}
