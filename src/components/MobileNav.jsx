import React from 'react';
import { FaChartBar, FaFolder, FaUser, FaCog } from 'react-icons/fa';

const items = [
  { id: 'overview', icon: <FaChartBar /> },
  { id: 'content', icon: <FaFolder /> },
  { id: 'profile', icon: <FaUser /> },
  { id: 'settings', icon: <FaCog /> },
];

export default function MobileNav({ active, setActive }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary-black text-primary-white flex justify-around py-4">
      {items.map(item => (
        <button key={item.id} onClick={() => setActive(item.id)} className="text-xl">
          <span className={active === item.id ? 'text-accent-blue-light' : ''}>{item.icon}</span>
        </button>
      ))}
    </div>
  );
}