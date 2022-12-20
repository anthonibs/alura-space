import styles from './Gallery.module.scss'

import Tags from '../Tags'
import Cards from './Cards';
import { useState } from 'react';
import galleries from './gallery.json';


export default function Gallery() {

  const [items, setItems] = useState(galleries)
  const tags = [...new Set(galleries.map(valor => valor.tag))]

  
  const filtered = (tag) => {
    const newImages = galleries.filter(item => item.tag === tag)
    setItems(newImages)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela sua galeria</h2>
      <Tags tags={tags} filtered={filtered} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  )
}
