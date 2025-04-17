import { ButtonsProduct, Product, ProductsContainer } from "@/styles/pages/home";
import Image from "next/image";

import "keen-slider/keen-slider.min.css"
import { stripe } from "@/lib/stripe";
import Slider from "@/components/slider";
import Stripe from "stripe";
import Link from "next/link";
import AddToCartButton from "@/components/buttonAddCart";

export default async function Home() {

  const resolve = await stripe.products.list({
    expand: ["data.default_price"],
  })

  const products = resolve.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceDefault: price,
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
    }
  })

  const productsFiltered = products.filter(product => product.id != 'prod_RbCDNqm4j7cCqD')
  
  return (
    <Slider>
      {productsFiltered.map(product => {
        return(
          <ProductsContainer key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`}>
                <Product>
                  <Image src={product.imageUrl} width={520} height={480} alt=""/> 
    
                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>

              </Link>

              <ButtonsProduct>
                {product.priceDefault.unit_amount !== null && 
                <AddToCartButton id={product.id} name={product.name} price={product.priceDefault.unit_amount} priceId={product.priceDefault.id} imageUrl={product.imageUrl}/> }
              </ButtonsProduct>
          </ProductsContainer>
            
        )
      })}
    </Slider>
  );
}

export const revalidate = 7200;