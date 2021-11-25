import { Articulo } from "../Articulo";
import styles from './estilos'

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro

    return (
        <div style={styles.div}>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </div>
    )
}