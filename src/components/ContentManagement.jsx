import React, { useState } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import Building from '../assets/building.svg';

const initialLocations = [
  {
    id: 1,
    name: 'FORE',
    hours: '08:00h–16:00h',
    type: 'Building',
    description: '',
    img: Building,
    staff: ['Dr. Amal Perera', 'Mr. Thilok de Silva', 'Ms. Nayanathara'],
    events: 'Ship Simulator Training students',
    status: 'open',
    density: 'low',
  },
  {
    id: 2,
    name: 'TOP',
    hours: '08:00h–16:00h',
    type: 'Building',
    description: '',
    img: Building,
    staff: ['Dr. Amal Perera', 'Mr. Thilok de Silva', 'Ms. Nayanathara'],
    events: 'Ship Simulator Training students',
    status: 'open',
    density: 'low',
  },
  {
    id: 3,
    name: 'DALIAN',
    hours: '08:00h–16:00h',
    type: 'Building',
    description: '',
    img: Building,
    staff: ['Dr. Amal Perera', 'Mr. Thilok de Silva', 'Ms. Nayanathara'],
    events: 'Ship Simulator Training students',
    status: 'open',
    density: 'low',
  },
  {
    id: 4,
    name: 'STORM',
    hours: '08:00h–16:00h',
    type: 'Building',
    description: '',
    img: Building,
    staff: ['Dr. Amal Perera', 'Mr. Thilok de Silva', 'Ms. Nayanathara'],
    events: 'Ship Simulator Training students',
    status: 'open',
    density: 'low',
  },
  {
    id: 5,
    name: 'WULFRUNA',
    hours: '08:00h–16:00h',
    type: 'Building',
    description: '',
    img: Building,
    staff: ['Dr. Amal Perera', 'Mr. Thilok de Silva', 'Ms. Nayanathara'],
    events: 'Ship Simulator Training students',
    status: 'open',
    density: 'low',
  },
];

export default function ContentManagement() {
  const [locations, setLocations] = useState(initialLocations);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: '', type: '', description: '', status: '', staff: '', events: '', hours: '', density: ''
  });

  const [availability, setAvailability] = useState({
    'Dr. Amal Perera': true,
    'Mr. Thilok de Silva': false,
    'Ms. Nayanathara': true
  });

  const openEditor = (loc) => {
    setForm({
      name: loc.name,
      type: loc.type,
      description: loc.description || '',
      status: loc.status,
      staff: loc.staff[0],
      events: loc.events,
      hours: loc.hours,
      density: loc.density || 'low'
    });
    setEditing(loc.id);
  };

  const closeEditor = () => setEditing(null);

  const saveChanges = () => {
    setLocations(prev =>
      prev.map(loc =>
        loc.id === editing
          ? {
              ...loc,
              name: form.name,
              type: form.type,
              description: form.description,
              status: form.status,
              hours: form.hours,
              staff: loc.staff,
              events: form.events,
              density: form.density
            }
          : loc
      )
    );
    closeEditor();
  };

  const toggleAvailability = (staffName) => {
    setAvailability(prev => ({
      ...prev,
      [staffName]: !prev[staffName]
    }));
  };

  return (
    <div className="">
      <h2 className="text-2xl font-kanit font-semibold text-primary-black">
        Content Management of Locations
      </h2>
      <p className="text-gray-500">Edit details of locations</p>

      <div className="space-y-4 mt-8">
        {locations.map(loc => (
          <div
            key={loc.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-primary-white rounded-lg shadow-md p-4"
          >
            <div className="flex items-center space-x-4">
              <div className="h-30 w-40 flex justify-center items-center bg-primary-green rounded-md">
                <img src={loc.img} alt={loc.name} className="w-35 rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {loc.name} <span className="text-gray-400">({loc.hours})</span>
                </h3>
                <p className="text-sm text-gray-500">{loc.type}</p>
                <div className='flex gap-5 mt-5'>
                  <p className="mt-1 text-[10px] text-gray-700">Operational Status:</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold
                      ${loc.status === 'open'
                        ? 'bg-accent-green-light text-accent-green-dark'
                        : 'bg-accent-red-light text-accent-red-dark'}`}
                  >
                    {loc.status.charAt(0).toUpperCase() + loc.status.slice(1)}
                  </span>
                </div>
                <div className='flex gap-5'>
                  <p className="mt-1 text-[10px] text-gray-700">Students Density:</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        loc.density === 'High'
                          ? 'bg-accent-red-light text-accent-red-dark'
                          : loc.density === 'Medium'
                          ? 'bg-accent-yellow-light text-accent-yellow-dark'
                          : 'bg-accent-green-light text-accent-green-dark'
                      }`}
                  >
                    {loc.density.charAt(0).toUpperCase() + loc.density.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:mt-0 md:mx-6">
              <div className="bg-primary-black text-primary-white flex flex-col items-center text-center rounded-lg p-4 w-full">
                <h4 className="font-semibold mb-2">Staff Availability</h4>
                <ul className="text-sm space-y-1 w-full">
                  {loc.staff.map((s, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${availability[s] ? 'bg-green-400' : 'bg-red-500'}`}></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-black text-primary-white flex flex-col items-center text-center rounded-lg p-4 w-full">
                <h4 className="font-semibold mb-2">Current Events</h4>
                <p className="text-sm w-full">{loc.events}</p>
              </div>
            </div>

            <button
              onClick={() => openEditor(loc)}
              className="mt-4 md:mt-0 text-accent-blue-dark hover:text-accent-blue-light"
            >
              <FaEdit size={20} />
            </button>

            {editing === loc.id && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-primary-white rounded-lg w-full max-w-md p-6 relative shadow-xl">
                  <button
                    onClick={closeEditor}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                  <h3 className="text-xl font-semibold mb-4">Edit {loc.name}</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Type</label>
                      <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2">
                        <option>Building</option>
                        <option>Lab</option>
                        <option>Facility</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea rows="2" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Operational Status</label>
                        <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2">
                          <option value="open">Open</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Working Hours</label>
                        <input type="text" value={form.hours} onChange={e => setForm(f => ({ ...f, hours: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Student Density</label>
                        <select
                          value={form.density}
                          onChange={e => setForm(f => ({ ...f, density: e.target.value }))}
                          className="w-full border border-accent-gray-light rounded px-3 py-2"
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Staff</label>
                        <select value={form.staff} onChange={e => setForm(f => ({ ...f, staff: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2">
                          {loc.staff.map((s, i) => <option key={i}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-medium mb-1">Availability</label>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => toggleAvailability(form.staff)} className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${availability[form.staff] ? 'bg-green-500' : 'bg-red-500'}`}>
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${availability[form.staff] ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </button>
                        <span className="text-sm">{availability[form.staff] ? 'Available' : 'Unavailable'}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Current Events</label>
                      <input type="text" value={form.events} onChange={e => setForm(f => ({ ...f, events: e.target.value }))} className="w-full border border-accent-gray-light rounded px-3 py-2" />
                    </div>
                  </div>

                  <button onClick={saveChanges} className="mt-6 w-full bg-accent-blue-dark text-primary-white rounded py-2 hover:bg-accent-blue-light">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
