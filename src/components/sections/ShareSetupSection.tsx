import React from 'react'

function ShareSetupSection(){
  return (
    <section>
      <div>
        <p className='text-[32px] font-bold text-center'>
          Compartilhe seus itens com a
        </p>
        <p className='text-20 text-customGray text-center'>#DomusDesignFurniture</p>
      </div>
      <div>
        <img 
        src='/images/share_your_setup.png'
        alt='share setup'
        className='w-full'
        />
      </div>
    </section>
  )
}

export default ShareSetupSection