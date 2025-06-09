// src/components/Settings.jsx
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SECTIONS = [
  {
    key: 'general',
    title: 'General',
    items: [
      { key: 'accessibility', label: 'Accessibility', desc: 'Edit accessibility options' },
      { key: 'theme',         label: 'Theme',         desc: 'Change the theme according to preferences' },
      { key: 'language',      label: 'Language and Region', desc: 'Change your language or region' },
      { key: 'permission',    label: 'Device Permission',   desc: 'Edit permissions for this application' },
    ]
  },
  {
    key: 'security',
    title: 'Security',
    items: [
      { key: 'password',    label: 'Change Password',     desc: 'Change your current login password' },
      { key: 'twofactor',   label: 'Two Factor Authentication', desc: 'Enable two factor authentication for additional security' },
    ]
  }
];

export default function Settings() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (sec) => setOpenSection(openSection === sec ? null : sec);

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-10 py-6">
      {SECTIONS.map(sec => (
        <div key={sec.key} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-kanit font-semibold text-primary-black">
            {sec.title}
          </h2>

          <div className="bg-primary-white rounded-lg shadow-md w-full border border-accent-gray-light">
            {sec.items.map(item => {
              const isTheme = item.key === 'theme';
              return (
                <div key={item.key} className="mx-3 my-3">
                  <button
                    onClick={() => isTheme ? toggle(item.key) : null}
                    className="w-full flex justify-between items-center px-4 py-4 sm:px-6 bg-transparent rounded-lg hover:bg-accent-gray-light transition-colors duration-200"
                  >
                    <div className="text-left">
                      <p className="font-medium text-primary-black">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <FaChevronRight className="text-gray-400 flex-shrink-0 ml-4" />
                  </button>
                </div>
              );
            })}
            {openSection === 'theme' && (
              <div className="px-4 sm:px-6 pb-4">
                <select className="w-full border border-accent-gray-light rounded px-3 py-2 mt-1">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System Default</option>
                </select>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
