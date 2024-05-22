'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import { BsFillHouseGearFill } from "react-icons/bs";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Vendas',
      link: '/shop',
    },
    {
      title: 'Sobre Nos',
      link: '/about',
    },
    {
      title: 'Contatos',
      link: '/contact',
    },
  ];

  const icons = [
    {
      iconUrl: '/images/user_icon.png',
      alt: 'user icon',
      action: () => console.log('you just clicked on the user icon'),
    },
    {
      iconUrl: '/images/search_icon.png',
      alt: 'search icon',
      action: () => console.log('you just clicked on the user icon'),
    },
    {
      iconUrl: '/images/heart_icon.png',
      alt: 'heart icon',
      action: () => console.log('you just clicked on the user icon'),
    },
    {
      iconUrl: '/images/cart_icon.png',
      alt: 'cart icon',
      action: () => console.log('you just clicked on the user icon'),
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='md:sticky md:top-0 md:shadow-none z-20'>
      {/* Desktop */}
      <div className='hidden lg:block animate-in fade-in zoom-in bg-white p-4'>
        <div className='flex justify-between mx-[41px] items-center'>
          <div className='flex items-center'>
            <h2 className='text-2xl font-bold'>Domus <span className='text-primary'>Design </span>  </h2>
             
          </div>
          <div className='flex gap-[20px] xl-gap-[50px] text-[16px] items-center select-one '>
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className='hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray'
              >
                <p>{link.title}</p>
              </Link>
            ))}
          </div>
          <div className='flex items-center gap-[40px] select-one'>
            {icons.map((icon, index) => (
              <img
                src={icon.iconUrl}
                onClick={icon.action}
                alt={icon.alt}
                key={index}
                className='cursor-pointer'
              />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className='lg:hidden'>
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[7rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon
                onClick={toggleMenu}
                className="cursor-pointer animate-in fade-in zoom-in"
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="text-black cursor-pointer"
                >
                  <p>{link.title}</p>
                </Link>
              ))}
              <div className="flex flex-col gap-[40px] select-none">
                {icons.map((icon, index) => (
                  <img
                    src={icon.iconUrl}
                    onClick={icon.action}
                    alt={icon.alt}
                    key={index}
                    className="cursor-pointer w-[28px] h-[28px] object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
