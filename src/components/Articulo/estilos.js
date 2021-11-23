const styles = {
    article: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        marginBottom: 30,
        padding: 20,
        textAlign: 'center',
        width: 450,
    },
    imgWrapper: {
        border: '1px solid #000',
        height: 250
    },
    imgWrapperImg: (img) => {
        return {
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            // border: '1px solid #000',
            height: 250
        }
    },
    img: {
        height: '100%'
    },
    h4: {
        fontSize: '22pt',
        marginBottom: 0
    },
    p: {
        color: '#4c4c4c',
        fontSize: '18pt',
        marginTop: 4
    }
}

export default styles