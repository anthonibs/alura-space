import Button from 'components/Button';
import styles from './Popular.module.scss'

import popular from './popular.json';

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {popular.map(item => (
          <li key={item.id}>
            <img src={item.path} alt={item.alt} />
          </li>
        ))}
      </ul>
      <Button>Ver mais fotos</Button>
    </aside>
  )
}
