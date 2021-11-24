import styles from './estilos'

export const Carro = () => {
    return (
        <div style={styles.carroContenedor}>
            <span style={styles.burbujaNumero}>5</span>
            <button style={styles.carro}>
                Carro
            </button>
        </div>

    )
}