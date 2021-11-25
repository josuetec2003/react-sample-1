import { Burbuja } from '../Burbuja'
import styles from './estilos'

export const Carro = () => {
    return (
        <div style={styles.carroContenedor}>
            <Burbuja cantidad={0} />
            <button style={styles.carro}>
                Carro
            </button>
        </div>

    )
}