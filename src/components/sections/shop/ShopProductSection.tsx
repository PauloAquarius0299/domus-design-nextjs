import ProductCard from '@/components/cards/ProductCard';

function ShopProductSection(){
  const data = [
    {
      imageUrl: '/images/p_1.png',
      title: 'Escrivaninha',
      description: 'Mesa Sofisticada',
      price: '2.500.000',
      otherPrice: '3.500.000',
      type: 'DISCOUNTED',
      typeValue: '-30%',
    },
    {
      imageUrl: '/images/p_2.png',
      title: 'Leviosa',
      description: 'Cadeira de balcão',
      price: '2.500.000',
      otherPrice: '3.500.000',
      type: 'DISCOUNTED',
      typeValue: '-30%',
    },
    {
      imageUrl: '/images/p_3.png',
      title: 'Lolito',
      description: 'Sofa grande e luxuoso',
      price: '7.500.000',
      otherPrice: '14.500.000',
      type: 'DISCOUNTED',
      typeValue: '-50%',
    },
    {
      imageUrl: '/images/p_4.png',
      title: 'Respira',
      description: 'Sofa personalizado e estiloso',
      price: '500.000',
      otherPrice: '',
      type: 'DISCOUNTED',
      typeValue: 'New',
    },
    {
      imageUrl: '/images/p_5.png',
      title: 'Grifo',
      description: 'Lampada com Luz Florencente',
      price: '1.500.000',
      otherPrice: '',
      type: 'DISCOUNTED',
      typeValue: '',
    },
    {
      imageUrl: '/images/p_6.png',
      title: 'Muggo',
      description: 'Sofá de coro',
      price: '150.000',
      otherPrice: '',
      type: 'NEW',
      typeValue: 'New',
    },
    {
      imageUrl: '/images/p_7.png',
      title: 'Pingky',
      description: 'Mesa da sala de estar',
      price: '7.000.000',
      otherPrice: '15.500.000',
      type: 'DISCOUNTED',
      typeValue: '-50%',
    },
    {
      imageUrl: '/images/p_8.png',
      title: 'Potty',
      description: 'Sofa minimalista',
      price: '500.000',
      otherPrice: '',
      type: 'NEW',
      typeValue: 'New',
    },
    {
      imageUrl: '/images/p_1.png',
      title: 'Escrivaninha',
      description: 'Mesa Sofisticada',
      price: '2.500.000',
      otherPrice: '3.500.000',
      type: 'DISCOUNTED',
      typeValue: '-30%',
    },
    {
      imageUrl: '/images/p_2.png',
      title: 'Leviosa',
      description: 'Cadeira de balcão',
      price: '2.500.000',
      otherPrice: '3.500.000',
      type: 'DISCOUNTED',
      typeValue: '-30%',
    },
    {
      imageUrl: '/images/p_3.png',
      title: 'Lolito',
      description: 'Sofa grande e luxuoso',
      price: '7.500.000',
      otherPrice: '14.500.000',
      type: 'DISCOUNTED',
      typeValue: '-50%',
    },
    {
      imageUrl: '/images/p_4.png',
      title: 'Respira',
      description: 'Sofa personalizado e estiloso',
      price: '500.000',
      otherPrice: '',
      type: 'DISCOUNTED',
      typeValue: 'New',
    },
    {
      imageUrl: '/images/p_5.png',
      title: 'Grifo',
      description: 'Lampada com Luz Florencente',
      price: '1.500.000',
      otherPrice: '',
      type: 'DISCOUNTED',
      typeValue: '',
    },
    {
      imageUrl: '/images/p_6.png',
      title: 'Muggo',
      description: 'Sofá de coro',
      price: '150.000',
      otherPrice: '',
      type: 'NEW',
      typeValue: 'New',
    },
    {
      imageUrl: '/images/p_7.png',
      title: 'Pingky',
      description: 'Mesa da sala de estar',
      price: '7.000.000',
      otherPrice: '15.500.000',
      type: 'DISCOUNTED',
      typeValue: '-50%',
    },
    {
      imageUrl: '/images/p_8.png',
      title: 'Potty',
      description: 'Sofa minimalista',
      price: '500.000',
      otherPrice: '',
      type: 'NEW',
      typeValue: 'New',
    },


  ]

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt=[46px] '>
                {data.map((item,index) => (
                    <ProductCard {...item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ShopProductSection;