// /pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MobileTopBar from '../components/MobileTopBar';
import MobileNav from '../components/MobileNav';
import Overview from '../components/Overview';
import ContentManagement from '../components/ContentManagement';
import Profile from '../components/Profile';
import Settings from '../components/Settings';

export default function Dashboard() {
  const [active, setActive] = useState('overview');

  const renderTab = () => {
    switch (active) {
      case 'overview': return <Overview />;
      case 'content':  return <ContentManagement />;
      case 'profile':  return <Profile />;
      case 'settings': return <Settings />;
      default:         return null;
    }
  };

  return (
    <div className="flex h-screen font-poppins text-primary-black">
      {/* Desktop sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main content area (with mobile top bar) */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Top Bar */}
        <div className="md:hidden">
          <MobileTopBar />
        </div>

        {/* Content */}
        <main
          className={`
            flex-1
            p-6
            overflow-auto
            bg-primary-white
            // push down on mobile to clear the 3rem top bar (h-12)
            mt-12 md:mt-0
            // ensure bottom padding so mobile nav doesn’t cover content
            pb-20 md:pb-6
          `}
        >
          {renderTab()}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav active={active} setActive={setActive} />
    </div>
  );
}
