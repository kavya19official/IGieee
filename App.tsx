
import React, { useState } from 'react';
import { UserRole, User } from './types';
import { MOCK_USER, IEEE_BRAND } from './constants';
import Login from './views/Login';
import StudentDashboard from './views/StudentDashboard';
import OrganizerDashboard from './views/OrganizerDashboard';
import AdminDashboard from './views/AdminDashboard';
import EventDiscovery from './views/EventDiscovery';
import RecruitmentPortal from './views/RecruitmentPortal';
import AboutSection from './views/AboutSection';
import Gallery from './views/Gallery';
import { 
  HomeIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  InformationCircleIcon, 
  PhotoIcon
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('home');

  if (!currentUser) {
    return <Login onLogin={() => setCurrentUser(MOCK_USER)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        if (currentUser.role === UserRole.STUDENT) return <StudentDashboard user={currentUser} onNavigate={setActiveTab} />;
        if (currentUser.role === UserRole.ORGANIZER) return <OrganizerDashboard user={currentUser} onNavigate={setActiveTab} />;
        if (currentUser.role === UserRole.ADMIN) return <AdminDashboard user={currentUser} onNavigate={setActiveTab} />;
        return null;
      case 'events':
        return <EventDiscovery userRole={currentUser.role} />;
      case 'recruitment':
        return <RecruitmentPortal user={currentUser} />;
      case 'about':
        return <AboutSection />;
      case 'gallery':
        return <Gallery />;
      default:
        return <StudentDashboard user={currentUser} onNavigate={setActiveTab} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'events', label: 'Events', icon: CalendarIcon },
    { id: 'recruitment', label: 'Recruit', icon: UserGroupIcon },
    { id: 'gallery', label: 'Gallery', icon: PhotoIcon },
    { id: 'about', label: 'About', icon: InformationCircleIcon },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0 md:pl-64">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed left-0 top-0 bottom-0 z-40">
        <div className="p-6 border-b">
          <img src={IEEE_BRAND.logo} alt="IEEE Logo" className="h-10 mb-2" />
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">IGDTUW Student Branch</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id 
                ? 'bg-[#00629B] text-white shadow-lg shadow-blue-100' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
            <img src={currentUser.avatar} alt="User" className="h-10 w-10 rounded-full border-2 border-white shadow-sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">{currentUser.name}</p>
              <p className="text-xs text-gray-500 uppercase font-semibold">{currentUser.role}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
             <button 
                onClick={() => {
                  if (currentUser.role === UserRole.STUDENT) setCurrentUser({...currentUser, role: UserRole.ORGANIZER});
                  else if (currentUser.role === UserRole.ORGANIZER) setCurrentUser({...currentUser, role: UserRole.ADMIN});
                  else setCurrentUser({...currentUser, role: UserRole.STUDENT});
                }}
                className="w-full text-[10px] text-[#00629B] border border-blue-200 py-1 rounded bg-blue-50 font-bold uppercase tracking-widest hover:bg-blue-100"
              >
                Switch Role (Demo)
              </button>
              <button 
                onClick={() => setCurrentUser(null)}
                className="w-full text-[10px] text-red-500 border border-red-100 py-1 rounded bg-red-50 font-bold uppercase tracking-widest hover:bg-red-100"
              >
                Logout
              </button>
          </div>
        </div>
      </aside>

      {/* Header - Mobile */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-50">
        <img src={IEEE_BRAND.logo} alt="IEEE Logo" className="h-8" />
        <div className="flex items-center space-x-3">
          <img src={currentUser.avatar} alt="User" className="h-8 w-8 rounded-full border shadow-sm" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        {renderContent()}
      </main>

      {/* Bottom Nav - Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === item.id ? 'text-[#00629B]' : 'text-gray-400'
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
