import { styled } from "../index";

export const ButtonsModalContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '0.5rem',

    'button': {
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
    }
})