import { Carro } from '../Carro'
import styles from './estilos'

export const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <Carro />
        </nav>
    )
}