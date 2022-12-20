// import styles from './Cards.module.scss'
import { useCallback, useEffect, useState } from "react"

import { AiOutlineHeart, AiFillHeart, AiOutlineExpandAlt } from 'react-icons/ai'

export default function Cards({ items, styles, filtro }) {

  const [lista, setLista] = useState(items)

  const testaFiltro = useCallback((tag) => {
    if (filtro !== null) {
      return filtro === tag;
    }

  }, [filtro])



  useEffect(() => {
    const handleListaAtualizada = items.filter(item => {
      if (filtro === "Total") {
        return items
      }
      return testaFiltro(item.tag)
    })

    handleListaAtualizada.length === 0 ? setLista(items) : setLista(handleListaAtualizada)

  }, [filtro, items, testaFiltro])

  return (
    <ul className={styles.galeria__cards}>
      {lista.map(item => (
        <li
          key={item.id}
          className={styles.galeria__card}
        >
          <img
            className={styles.galeria__imagem}
            src={item.imagem}
            alt={item.titulo}
          />
          <p className={styles.galeria__descricao}>{item.titulo}</p>
          <div>
            <p>{item.creditos}</p>
            <span>
              <button>
                <AiOutlineHeart />
              </button>

              <button>
                <AiOutlineExpandAlt />
              </button>
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
