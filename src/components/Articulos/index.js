import { Articulo } from "../Articulo";
import styles from './estilos'

export const Articulos = (props) => {
    const productos = props.productos

    return (
        <div style={styles.div}>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo {...prod} />
                )
            }
        </div>
    )
}