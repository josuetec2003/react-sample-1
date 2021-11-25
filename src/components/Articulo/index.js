import styles from './estilos'
import { Button } from '../Button'

export const Articulo = ({prod, agregarAlCarro}) => {
    return (
        <article style={styles.article}>
            <div style={styles.imgWrapperImg(prod.imagen)}>
                {/* <img style={styles.img} src={imagen}/> */}
            </div>

            <h4 style={styles.h4}>{prod.nombre}</h4>
            <p style={styles.p}>${prod.precio.toLocaleString()}</p>

            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </article>
    )
}