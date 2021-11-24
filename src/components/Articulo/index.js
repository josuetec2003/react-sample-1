import { useState } from 'react'
import styles from './estilos'
import { Button } from '../Button'

export const Articulo = ({id, nombre, precio, imagen}) => {
    const [valor, setValor] = useState(0)

    const handleClick = () => {
        setValor(valor + 1)
    }

    return (
        <article style={styles.article}>
            <div style={styles.imgWrapperImg(imagen)}>
                {/* <img style={styles.img} src={imagen}/> */}
            </div>

            <h4 style={styles.h4}>{nombre}</h4>
            <p style={styles.p}>${precio.toLocaleString()} - {valor}</p>

            <button onClick={() => handleClick()}>Modificar el estado</button>

            <Button />
        </article>
    )
}