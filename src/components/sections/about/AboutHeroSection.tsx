import { ChevronRight } from 'lucide-react'
import React from 'react'

const AboutHeroSection = () => {
  return (
    <section className='bg-shop-hero h-[316px] flex justify-center flex-col items-center'>
        <p className='font-medium text-[48px]'>Sobre Nos</p>
        <div className='flex gap-2'>
                <p className='font-bold'>Home</p>
                <ChevronRight />
                <p>Sobre nos</p>
            </div>
    </section>
  )
}

export default AboutHeroSection