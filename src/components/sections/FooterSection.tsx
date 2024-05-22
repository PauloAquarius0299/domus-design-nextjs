import React from 'react'
import Link from 'next/link';
import {Separator} from '../ui/separator'
import { Input } from '../ui/input';


function FooterSection(){
  const links  = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Shop',
      link: '/shop',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];

  const help = [
    {
      title: 'Payment Options',
      link: '/',
    },
    {
      title: 'Returns',
      link: '/',
    },
    {
      title: 'Privacy Policies',
      link: '/',
    },
  ];

  return (
    <section className='pb-16'>
      <div className='my-8'>
        <Separator />
      </div>

      <div className='px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8 '>
        <div>
        <div className='flex items-center'>
            <h2 className='text-2xl font-bold'>Domus <span className='text-primary'>Design </span>  </h2>
          </div>
          <p className='text-customGray mt-[50px]'>
            000 Centro, Belo Horizonte - MG
            <br /> Rua mil quatrocentos
            <br /> 987654 - BH
          </p>
        </div>
        <div>
          <p className='text-customGray text-normal mb-[55px]'>Links</p>
          <div className='flex flex-col gap-[45px] font-medium'>
          {links.map((link, index) => (
              <Link href={link.link} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className='text-customGray text-normal mb-[55px]'>Help</p>
          <div className='flex flex-col gap-[45px] font-medium'>
          {links.map((link, index) => (
              <Link href={link.link} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className='text-customBlack font-bold text-normal mb-[55px]'>Newsletter</p>
          <div className='flex items-center gap-4'>
            <Input placeholder='Enter your email address' />


            <div>
            <p className='font-medium underline underline-offset-[6px] cursor-pointer'>
              SUBSCRIBE
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-[70px]'>
        <div className='py-8 pt-[48px]'>
          <Separator />
        </div>

        <p className='text-customGray flex items-center justify-center'>2024 domus design. All right reserved</p>
      </div>
    </section>
  )
}

export default FooterSection