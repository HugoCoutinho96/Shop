import { ButtonsContainer, ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import ButtonBuyProduct from "@/components/buttonBuyProduct";
import AddToCartButton from "@/components/buttonAddCart";
import Link from "next/link";

interface ProductsProps{
    params: Promise<{
        id: string
    }>
}

export default async function Products({params}: ProductsProps){
    const { id } = await params
    const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    const priceFormatted = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price.unit_amount! / 100)
    
    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.images[0]} width={520} height={480} alt="" />
            </ImageContainer>
            
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{priceFormatted}</span>

                <p>{product.description}</p>

                <ButtonsContainer>
                    <ButtonBuyProduct price={price}/>
                    {price.unit_amount !== null && 
                        <AddToCartButton id={product.id} imageUrl={product.images[0]} name={product.name} price={price.unit_amount} priceId={price.id}/>
                    }
                </ButtonsContainer>

                <Link href="/">Voltar ao catálogo</Link>
            </ProductDetails>
        </ProductContainer>
    )
}

export const revalidate = 3600;