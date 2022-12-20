import styles from './Tags.module.scss'

export default function Tags({ tags, filtro, setFiltro, setIsLoading }) {

  function selecionarFiltro(tag) {
    setIsLoading(true)
    setTimeout(() => {
      if (filtro === tag.label) {
        setIsLoading(false)
        return setFiltro(null)
      }
      setIsLoading(false)

      return setFiltro(tag.label)
    }, 500)
  }

  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>

      <ul className={styles.tags__lista}>
        {tags.map(tag => (
          <li
            className={`
              ${styles.tags__item}
              ${filtro === tag.label ? styles["tags__item--ativo"] : ""}
            `}
            key={tag.id}
            onClick={() => selecionarFiltro(tag)}>
            {tag.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
