import React from 'react';

export default function Overview() {
  return (
    <div className='p-6 shadow-md bg-primary-white rounded-lg'>
      <h1 className="font-kanit text-2xl font-semibold text-primary-black">Overall Campus Activity</h1>
      <p className="text-accent-gray-medium mt-1 mb-6">Live Overview of student density and facility utilization</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {[
          { percent: '75%', traffic: 'High Traffic', title: 'Campus Average', change: '15%', changeColor: 'primary-green' },
          { percent: '20%', traffic: 'High Traffic', title: 'Quiet Zones', change: '15%', changeColor: 'primary-red' },
          { percent: '90%', traffic: 'High Traffic', title: 'Relax Hours', change: '15%', changeColor: 'primary-green' },
        ].map((c, i) => (
          <div key={i} className="bg-primary-white p-10 rounded-xl shadow-sm text-center hover:shadow-2xl cursor-pointer transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary mb-2">{c.percent}</div>
            <div className="text-sm font-medium text-primary-black">{c.traffic}</div>
            <div className="text-sm text-accent-gray-medium mb-2">{c.title}</div>
            <div className={`text-xs font-semibold text-${c.changeColor}`}>{c.change} Compared to previous period</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Top Crowd Facilities */}
        <div>
          <h2 className="text-lg font-semibold text-primary-black mb-1">Top Crowd Facilities</h2>
          <p className="text-xs text-accent-gray-medium mb-4">Current density by location</p>
          {[
            { label: 'Main Cafeteria', level: 'High', pct: '100%' },
            { label: 'Library', level: 'High', pct: '90%' },
            { label: 'Lab 06', level: 'Medium', pct: '75%' },
            { label: 'Dalian', level: 'Medium', pct: '60%' },
            { label: 'Top', level: 'Low', pct: '30%' },
            { label: 'FORE', level: 'Low', pct: '20%' },
          ].map((f, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-primary-black">{f.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold
                  ${f.level === 'High'
                    ? 'bg-accent-red-light text-accent-red-dark'
                    : f.level === 'Medium'
                    ? 'bg-accent-yellow-light text-accent-yellow-dark'
                    : 'bg-accent-green-light text-accent-green-dark'}`
                }>
                  {f.level}
                </span>
              </div>
              <div className="w-full bg-transparent h-1 py-2 rounded-full">
                <div
                  className="h-1 rounded-full bg-accent-blue-light"
                  style={{ width: f.pct }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Operational Status */}
        <div className='px-10 shadow-md bg-primary-white rounded-xl flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300'>
          <h2 className="text-lg font-semibold text-primary-black mb-1">Operational Status</h2>
          <p className="text-xs text-accent-gray-medium mb-4">Real-Time Opening information</p>
          {['Main Cafeteria','Book Store','Ship Simulator','Library','Downtown Cafe'].map((loc, idx) => {
            const isOpen = loc !== 'Ship Simulator';
            return (
              <div key={idx} className="flex justify-between items-center mb-3 text-sm">
                <span className="text-primary-black">{loc}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${isOpen
                    ? 'bg-accent-green-light text-accent-green-dark'
                    : 'bg-accent-red-light text-accent-red-dark'}`
                }>
                  {isOpen ? 'Open' : 'Closed'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}