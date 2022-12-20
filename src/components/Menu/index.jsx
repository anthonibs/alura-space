import Icons from '../Icons'
import styles from './Menu.module.scss'
import icons from './icons.json'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icons.map(icon => (
          <Icons
            key={icon.id}
            link={icon.link}
            alt={icon.alt}
            path={icon.path}
          />
        ))}
      </ul>
    </nav>
  )
}
