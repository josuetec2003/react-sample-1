import { Burbuja } from '../Burbuja'
import styles from './estilos'

export const Carro = ({ cantidad, productos }) => {
    return (
        <div style={styles.carroContenedor}>
            <Burbuja cantidad={cantidad} />
            <button style={styles.carro}>
                Carro
            </button>
            {
                cantidad > 0 ? 
                    <div style={styles.listaArticulos}>
                        <ul style={styles.ul}>
                            {
                                productos.map(x => {
                                    return (
                                        <li style={styles.li}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span>{x.nombre}</span>
                                            <span>{x.cantidad}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div> : null
            }
        </div>

    )
}