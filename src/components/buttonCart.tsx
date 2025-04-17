'use client'

import { useCart } from "@/context/CartContext"
import { ButtonCartStyle } from "@/styles/pages/home"
import { ShoppingCartSimple } from "phosphor-react"
import { forwardRef } from "react"

const ButtonCartComponent = forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  (props, ref) => {
    const { cart } = useCart()
    const quantity: number = cart.reduce((total, item) => total + item.quantity, 0)

    return (
      <ButtonCartStyle ref={ref} {...props}>
        <ShoppingCartSimple size={32} />
        {quantity > 0 ?
          <span>{quantity}</span> : null
        }
      </ButtonCartStyle>
    )
  }
)

ButtonCartComponent.displayName = 'ButtonCartComponent'
export default ButtonCartComponent