import { keyframes, styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
})

export const ProductsContainer = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
})

export const ButtonsProduct = styled('div', {
    display: 'flex',

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
        width: '100%',

        '&:hover': {
            backgroundColor: '$green300',
        }
    }
})

export const slideIn = keyframes({
    '0%': { transform: 'translateX(100%)', opacity: 0 },
    '100%': { transform: 'translateX(0)', opacity: 1 },
})

export const slideOut = keyframes({
'100%': { transform: 'translateX(100%)', opacity: 0 },
'0%': { transform: 'translateX(0)', opacity: 1 },
})

export const ButtonCartStyle = styled("button", {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '0.75rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background 0.2s',
    height: '3.5rem',
    position: 'relative',

    '&:hover': {
        backgroundColor: '$green300',
    },

    span: {
        position: 'absolute',
        right: '6px',
        top: '2px',
        fontWeight: 'bold',
    }
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: "pointer",
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0 ,0.6)',

        transition: 'all 0.2s ease-in-out',

        'strong': {
            fontSize: '$lg',
            color: '$gray300',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

})

export const CartContainer = styled("div", {
    display: 'flex',
    gap: '1rem',
})