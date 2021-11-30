import { Carro } from '../Carro'
import styles from './estilos'

export const Navbar = ({ cantidad, productos }) => {
    return (
        <nav style={styles.nav}>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} />
        </nav>
    )
}