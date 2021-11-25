import styles from './estilos'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <span style={styles.burbujaNumero}>
            {cantidad > 9 ? '9+' : cantidad}
        </span>
    )   
}