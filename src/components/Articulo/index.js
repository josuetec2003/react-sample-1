import { Button } from '../Button'
import styles from './estilos'

export const Articulo = ({id, nombre, precio, imagen}) => {
    // const {nombre, precio, imagen} = props
    return (
        <article style={styles.article}>
            <img style={styles.img} src={imagen}/>
            <h4 style={styles.h4}>{nombre}</h4>
            <p style={styles.p}>${precio.toLocaleString()}</p>
            <Button />
        </article>
    )
}