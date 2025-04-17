import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 1rem'
})

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    position: 'relative',
    gap: '0.5rem',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    div: {
        div: {
            display: 'flex',
            flexDirection: 'column',
            color: '$gray300',
    
            strong: {
                fontSize: '$lg'
            },
        }
    }
})