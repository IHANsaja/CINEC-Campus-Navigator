// src/components/Profile.jsx
import React, { useState } from 'react';
import ProfileIllustration from '../assets/profile.png'; 
import ProfileEditIllustration from '../assets/edit-profile.png';

export default function Profile() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
  });

  const saveProfile = () => {
    // TODO: submit profile
    console.log('Saved', form);
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className='w-full flex flex-col items-center justify-center gap-10 bg-primary-white rounded-lg shadow-md p-6 space-y-6 md:space-y-0 md:space-x-6'>
        <img src={ProfileEditIllustration} alt="profile edit isometric" className='w-[200px] h-[200px]' />
        {/* Form */}
        <div className="md:w-1/2 p-6 space-y-6">
          <h2 className="text-2xl font-kanit font-semibold text-primary-black">
            Profile
          </h2>
          <div className="space-y-4">
            {[
              { name: 'firstName', label: 'First name' },
              { name: 'lastName',  label: 'Last name' },
              { name: 'contact',   label: 'Contact' },
              { name: 'email',     label: 'Email', type: 'email' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-sm font-medium mb-1">{f.label}</label>
                <input
                  type={f.type || 'text'}
                  value={form[f.name]}
                  onChange={e => setForm(s => ({ ...s, [f.name]: e.target.value }))}
                  className="w-full border border-accent-gray-light rounded px-3 py-2"
                />
              </div>
            ))}
          </div>

          <button
            onClick={saveProfile}
            className="mt-4 w-full font-kanit bg-accent-blue-dark text-primary-white rounded py-2 px-6 hover:bg-accent-blue-light"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="md:w-1/2 p-6 flex items-center justify-center">
        <img
          src={ProfileIllustration}
          alt="Profile Illustration"
          className="w-full max-w-sm"
        />
      </div>
    </div>
  );
}
