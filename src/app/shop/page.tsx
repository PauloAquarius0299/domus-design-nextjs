import React from 'react'
import ShopHeroSection from '@/components/sections/shop/ShopHeroSection'
import ShopFilterSection from '@/components/sections/shop/ShopFilterSection'
import ShopProductSection from '@/components/sections/shop/ShopProductSection'
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection'
import ShopPaginationSection from '@/components/sections/shop/ShopPaginationSection'


function ShopPage(){
  return (
    <div>
      <ShopHeroSection />
      <ShopFilterSection />
      <div className='mx-4 md:mx-[130px]'>
        <ShopProductSection />
      </div>
      <div className='my-[70px]'>
        <ShopPaginationSection />
      </div>

      <ShopBannerSection />
    </div>
  )
}

export default ShopPage