import { styled } from "..";

export const ProductContainer = styled('main', {
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    maxWidth: 1180,
    margin: '0 auto',
    padding: '1rem',

    '@lg': {
        gridTemplateColumns: '1fr'
    },

    '@sm': {
        paddingRight: '2rem',
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    '@lg': {
        maxWidth: 476,
        maxHeight: 556,
    },

    '@sm': {
        width: '100%',
        height: 'auto',

        img: {
            width: '100%',
            height: 'auto',
        },
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$gray300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },

    button: {
        
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        transition: 'background 0.2s',

        '&:hover': {
            backgroundColor: '$green300',
        }
    }, 

    a: {
        display: 'block',
        margin: '2rem auto',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.2s',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const ButtonsContainer = styled("div", {
    marginTop: 'auto',
    paddingBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',

    '@lg': {
        marginTop: '5rem',
    },
    
    '@sm': {
        marginTop: '4rem',
    }
})