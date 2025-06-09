import React from 'react';
import { FaUser } from 'react-icons/fa';
import Logo from "../assets/logo.svg"; 

export default function MobileTopBar() {
  return (
    <div className="md:hidden flex items-center justify-between bg-primary-black text-primary-white px-4 h-12">
      <div className="flex items-center justify-center cursor-pointer">
        <img src={Logo} alt="cinec logo" className='w-[30px] mr-5'/>
        <span className="font-kanit text-base font-semibold">CINEC</span>
        <span className="ml-1 font-kanit text-sm">Smart Navigator</span>
      </div>
      <div className='bg-accent-gray-dark px-3 py-3 rounded-3xl cursor-pointer'><FaUser /></div>
    </div>
  );
}