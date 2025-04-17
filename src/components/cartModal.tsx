'use client';

import { useCart } from '@/context/CartContext';
import { CartContainer, slideIn } from '@/styles/pages/home';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import ButtonCartComponent from './buttonCart';
import QuantityInput from './quantityInput';
import { ButtonsModalContainer } from '@/styles/components/buttonsModal';
import ButtonBuyProductCart from './buttonBuyProductCart';

export default function Modal() {

  const { cart } = useCart();
  const products = cart.map(item => (
      {
        priceId: item.priceId, 
        quantity: item.quantity
      }
  ))
  const fullPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const priceFormatted = (price:number): string => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price / 100)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonCartComponent/>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <Dialog.Content
          style={{
            position: 'fixed',
            top: '0%',
            right: '0%',
            background: 'white',
            padding: '20px',
            width: '300px',
            height: '100vh',
            animation: `${slideIn} 300ms ease-out`,
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Dialog.Title>Carrinho de compras</Dialog.Title>

            {cart.length <= 0 ?
              <Dialog.Description>
                Seu carrinho está vazio, volte para o catálogo para adicionar items.
              </Dialog.Description> :

              <Dialog.Description>
                Aqui estão seus produtos para efetuar a compra.
              </Dialog.Description>
            }

            {cart.map(item => {
              return (
                <CartContainer key={item.id}>
                    <Image src={item.imageUrl} alt='' width={80} height={60}/>
                    <div>
                        <h4>{item.name}</h4>
                        <h6>{priceFormatted(item.price)}</h6>
                        <QuantityInput itemId={item.id} initial={item.quantity}/>
                    </div>
                </CartContainer>
            )})}

            {cart.length <= 0 ? null :
                <strong>{`Valor Total: ${priceFormatted(fullPrice)}`}</strong>
            }    

            <ButtonsModalContainer>
              {cart.length <= 0 ? null : 
                <ButtonBuyProductCart items={products}/>
              }

              <Dialog.Close asChild>
                <button>Fechar</button>
              </Dialog.Close>
            </ButtonsModalContainer>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}