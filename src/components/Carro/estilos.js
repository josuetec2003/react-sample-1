const styles = {
    carroContenedor: {
        position: 'relative'
    },
    carro: {
        backgroundColor: '#118002',
        border: 'none',
        borderRadius: 5,
        color: '#fff',
        padding: '10px 15px',
        cursor: 'pointer'
    },
    listaArticulos: {
        border: '1px solid #000',
        backgroundColor: '#fff',
        color: '#000',
        padding: 5,
        position: 'absolute',
        right: 0,
        top: 50,
        width: 400,
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        alignItems: 'center',
        borderBottom: '1px solid #b3b3b3',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingBottom: 5
    }

}

export default styles