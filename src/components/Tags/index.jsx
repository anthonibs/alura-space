import styles from './Tags.module.scss'
import gallery from '../Gallery/gallery.json'

export default function Tags({ tags, filtered, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => (
          <li key={tag} onClick={() => filtered(tag)}>{tag}</li>
        ))}
        <li onClick={() => setItems(gallery)}>Todas</li>
      </ul>
    </div>
  )
}
