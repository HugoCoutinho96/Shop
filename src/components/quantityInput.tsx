'use client'

import { useCart } from '@/context/CartContext'
import { Button, Container, Value } from '@/styles/components/quantityInput'
import { TrashSimple } from 'phosphor-react'
import { useState } from 'react'

export default function QuantityInput({
  initial = 1,
  itemId
}: {
  initial?: number
  itemId: string
}) {
  const {updateProductQuantity, removeProduct} = useCart() 
  const [quantity, setQuantity] = useState(initial)

  const handleIncrement = () => {
      const newValue = quantity + 1
      setQuantity(newValue)
      updateProductQuantity(itemId, newValue)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      const newValue = quantity - 1
      updateProductQuantity(itemId, newValue)
      setQuantity(newValue)
    }
  }

  const handleRemove = () => {
    removeProduct(itemId)
  }

  return (
    <Container role="group" aria-label="Quantidade">
      {quantity <= 1 ? 
        <Button aria-label="Remover produto do carrinho" onClick={handleRemove}><TrashSimple size={18} style={{ verticalAlign: "middle"}}/></Button>
        : <Button aria-label="Diminuir quantidade" onClick={handleDecrement}>−</Button>
      }  
      <Value>{quantity}</Value>
      <Button aria-label="Aumentar quantidade" onClick={handleIncrement}>+</Button>
    </Container>
  )
}