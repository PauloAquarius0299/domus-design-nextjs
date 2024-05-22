import React from 'react'

function AboutCompanySection(){
 

  return (
   <section className="flex flex-col md:flex-row-reverse items-center justify-between p-8">
  <div className="md:w-1/2 p-8">
      <h4 className="text-2xl font-bold text-customBlack">Sobre Nos</h4>
      <h2 className="text-4xl font-bold text-customGray">Bem Vindo a<span className='text-black'> Domus</span> <span className='text-primary'>Design</span></h2>
      <p className="mt-4 text-1xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, soluta? Facere molestias ut id, magnam beatae nostrum, neque minima vitae consequatur aliquam cupiditate possimus! Magni laudantium, harum neque voluptatem sunt voluptatibus nostrum reprehenderit rem? Nobis exercitationem itaque eligendi officia molestiae neque consectetur ratione, adipisci consequatur velit numquam! Nulla, magnam deleniti.
      </p>
  </div>
  <div className="md:w-1/2 flex items-center justify-center p-8">
      <img src="/images/about-image.jpg" alt="about image" className="w-4/4 h-auto" />
  </div>
 
</section>
  )
}

export default AboutCompanySection;