import styles from './Gallery.module.scss'

import Tags from '../Tags'
import Cards from './Cards';
import { useCallback, useEffect, useState } from 'react';
import Spinner from 'components/Spinner';

export default function Gallery() {

  const [filtro, setFiltro] = useState(null)
  const [galleries, setGalleries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadingGalleries = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await fetch("http://localhost:6300/gallery");
      const data = await response.json();
      setGalleries(data)

      if (!response.ok) {
        throw new Error(`>>> Error ao conectar com servidor: ${response.url}`,)
      }

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadingGalleries()
  }, [loadingGalleries])


  const tags = [...new Set(galleries.map((valor) => valor.tag))]
  const novaTags = tags.map((item, index) => ({ label: item, id: index, }))
  const addTagTotal = [...novaTags, { label: "Total", id: null }]

  return (
    <section className={styles.galeria}>
      {isLoading && <Spinner />}
      <h2>Navegue pela sua galeria</h2>
      <Tags tags={addTagTotal} filtro={filtro} setFiltro={setFiltro} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Cards items={galleries} styles={styles} filtro={filtro} />
    </section>
  )
}
