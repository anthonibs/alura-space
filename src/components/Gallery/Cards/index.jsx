// import styles from './Cards.module.scss'
import like from "./favorito.png"
import openModal from "./open.png"

export default function Cards({ items, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {items.map(item => (
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
              <img src={like} alt="Ícone coração de curtir" />
              <img src={openModal} alt="Ícone de abrir modal" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
