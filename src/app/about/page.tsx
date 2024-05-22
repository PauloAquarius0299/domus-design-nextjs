
import AboutCompanySection from '@/components/sections/about/AboutCompanySection';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import React from 'react'
import AboutTestimonalSection from '@/components/sections/about/AboutTestimonialSection';
import AboutContentSection from '@/components/sections/about/AboutContentSection';

function AboutPage(){
  return (
    <div>
        <AboutHeroSection />
        <AboutCompanySection />
        <AboutContentSection />
        <div className="my-[70px]">
          <AboutTestimonalSection />
        </div>
    </div>
  )
}

export default AboutPage;