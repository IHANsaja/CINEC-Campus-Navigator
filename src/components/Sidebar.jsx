import React from 'react';
import { FaChartBar, FaFolder, FaUser, FaCog } from 'react-icons/fa';
import Logo from "../assets/logo.svg"; 

const items = [
  { id: 'overview', label: 'Overview', icon: <FaChartBar /> },
  { id: 'content', label: 'Content Management', icon: <FaFolder /> },
  { id: 'profile', label: 'Profile', icon: <FaUser /> },
  { id: 'settings', label: 'Settings', icon: <FaCog /> },
];

export default function Sidebar({ active, setActive }) {
  return (
    <div className="hidden md:flex flex-col w-84 bg-primary-black text-primary-white font-semibold p-6">
      <div className="flex items-center mb-12 gap-5">
        <img src={Logo} alt="cinec logo" />
        <div className="text-2xl font-bold mr-2 font-kanit">CINEC <span className='text-lg'>Smart Navigator</span></div>
      </div>
      <nav className="flex-1">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center mb-4 p-3 px- rounded-4xl text-left transition-colors 
              ${active === item.id ? 'bg-accent-blue-light' : 'hover:bg-accent-gray-dark'}`}
          >
            <div className="mr-3 text-lg">{item.icon}</div>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <div className="h-[50px] flex justify-start bg-white text-primary-black rounded-full">
          <div className='h-full w-[50px] rounded-3xl flex items-center justify-center bg-black mr-5'><FaUser className=" text-primary-white" /></div>
          <p className='py-3'>ADMIN_01</p>
        </div>
      </div>
    </div>
  );
}