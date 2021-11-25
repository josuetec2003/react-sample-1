import styles from './estilos'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <button onClick={() => agregarAlCarro(prod)} style={styles.button}>{children}</button>
    )
}
