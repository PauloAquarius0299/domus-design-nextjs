import React from 'react'

function BrowseTheRangeSection(){
  const data = [
    {
      imageUrl: '/images/btr_1.png',
      title: 'Escrivaninha',
    },
    {
      imageUrl: '/images/btr_2.png',
      title: 'Sala',
    },
    {
      imageUrl: '/images/btr_3.png',
      title: 'Quarto',
    },
  ];

  return (
    <section>
      <div>
        <p className='text-[32px] font-bold text-center'>Navegue pela gama</p>
        <p className='text-20 text-customGray text-center'>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[30px] md:mt-[60px] '>
        {data.map((item,index) => (
          <div 
          key={index}>
            <div>
              <img 
              src={item.imageUrl}
              alt='category image'
              className='h-[480px] rounded-[10px] object-cover'
              />
            </div>
            <p className='text-[19px] text-customBlack font-semibold mt-[30px] md:mt-[62px] '>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrowseTheRangeSection