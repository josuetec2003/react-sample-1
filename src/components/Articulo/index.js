import styles from './estilos'
import { Button } from '../Button'

export const Articulo = ({id, nombre, precio, imagen}) => {
    // const {nombre, precio, imagen} = props
    return (
        <article style={styles.article}>
            <div style={styles.imgWrapperImg(imagen)}>
                {/* <img style={styles.img} src={imagen}/> */}
            </div>

            <h4 style={styles.h4}>{nombre}</h4>
            <p style={styles.p}>${precio.toLocaleString()}</p>

            <Button />
        </article>
    )
}