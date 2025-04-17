'use client'

import { HomeContainer } from "@/styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import { ReactNode } from "react"
import "keen-slider/keen-slider.min.css"

export default function Slider({ children }: { children: ReactNode }) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 633px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  })

  return (
    <HomeContainer
      ref={sliderRef}
      className='keen-slider'
    >
      {children}
    </HomeContainer>
  )
}