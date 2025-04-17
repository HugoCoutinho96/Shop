import { styled } from '../index'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '7rem',
  border: '1px solid $gray300',
  borderRadius: 6,
  padding: '0.5rem 0',
  backgroundColor: '$gray100',
  marginTop: '0.5rem',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '$gray800',

  '&:hover': {
    color: '$green500',
  },
})

export const Value = styled('span', {
  minWidth: '1rem',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
})