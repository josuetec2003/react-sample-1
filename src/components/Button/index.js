import { useState } from 'react'
import styles from './estilos'

export const Button = () => {
    const [precio, setPrecio] = useState(100)

    return (
        <button style={styles.button}>Agregar al carrito: {precio}</button>
    )
}