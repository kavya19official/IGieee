
import React from 'react';
import { User } from '../types';
import { MOCK_EVENTS, MOCK_APPLICATIONS, IEEE_BRAND } from '../constants';
import { BellIcon, ArrowRightIcon, CheckBadgeIcon, QrCodeIcon } from '@heroicons/react/24/solid';

interface StudentDashboardProps {
  user: User;
  onNavigate: (tab: string) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, onNavigate }) => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero / Welcome with Digital ID Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-gradient-to-br from-[#00629B] to-[#003B5C] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
            <p className="text-blue-200 font-bold uppercase tracking-[0.2em] text-xs mb-2">Welcome Back</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {user.name.split(' ')[0]} <span className="text-blue-300 italic">{user.name.split(' ')[1]}</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-2">
              <button 
                onClick={() => onNavigate('events')}
                className="bg-white text-[#00629B] px-6 py-3 rounded-2xl font-black text-sm hover:scale-105 transition-transform"
              >
                Upcoming Events
              </button>
              <button 
                onClick={() => onNavigate('recruitment')}
                className="bg-blue-800/40 backdrop-blur-md text-white border border-blue-400/30 px-6 py-3 rounded-2xl font-black text-sm hover:bg-blue-800/60 transition-colors"
              >
                Open Roles
              </button>
            </div>
          </div>
          {/* Abstract circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
        </section>

        {/* Digital IEEE ID Card */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center justify-between">
          <div className="w-full flex justify-between items-start mb-4">
             <img src={IEEE_BRAND.logo} alt="IEEE" className="h-6" />
             <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-full uppercase">Active Member</span>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <img src={user.avatar} alt="Profile" className="h-24 w-24 rounded-full border-4 border-[#00629B] p-1 mx-auto" />
              <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-lg">
                <CheckBadgeIcon className="h-6 w-6 text-[#00629B]" />
              </div>
            </div>
            <div>
              <p className="text-lg font-black text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Member ID: #98723412</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-3xl w-full flex items-center justify-center space-x-3 group cursor-pointer hover:bg-gray-100 transition-colors">
            <QrCodeIcon className="h-8 w-8 text-gray-400 group-hover:text-[#00629B] transition-colors" />
            <span className="text-xs font-black text-gray-500 uppercase">Scan for Entry</span>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Events Feed */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Your Registrations</h2>
              <button onClick={() => onNavigate('events')} className="text-[#00629B] font-bold text-sm flex items-center hover:underline group">
                Browse Events <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_EVENTS.slice(0, 2).map((event) => (
                <div key={event.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img src={event.image} alt={event.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#00629B]">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 truncate text-lg">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-green-600 text-xs font-black uppercase mb-4">
                      <CheckBadgeIcon className="h-4 w-4" />
                      <span>Registration Confirmed</span>
                    </div>
                    <button className="w-full py-3 bg-gray-50 text-gray-600 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors uppercase tracking-widest">
                      View Entry Pass
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Logs */}
          <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100">
            <h2 className="text-xl font-black text-gray-900 mb-8">Interaction History</h2>
            <div className="space-y-8">
              {[
                { label: 'Application Submitted', desc: 'Technical Lead role @ IEEE Software Dept', time: '2 hours ago', icon: '📩', color: 'bg-blue-50 text-blue-600' },
                { label: 'Event Check-in', desc: 'MOMENTUM x Harkirat (Verification: Success)', time: '1 day ago', icon: '✅', color: 'bg-green-50 text-green-600' },
                { label: 'Certificate Issued', desc: 'WIE Hackathon Merit Certificate', time: '3 days ago', icon: '🎓', color: 'bg-purple-50 text-purple-600' },
              ].map((act, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl ${act.color} group-hover:scale-110 transition-transform`}>
                    {act.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-gray-900">{act.label}</p>
                    <p className="text-xs text-gray-500 font-medium">{act.desc}</p>
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{act.time}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Quick-access */}
        <div className="space-y-8">
          <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-gray-900">Notifications</h2>
              <span className="bg-[#00629B] text-white text-[10px] font-black px-2 py-1 rounded-full">3 NEW</span>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Urgent: Hackathon Deadline', time: '10m ago' },
                { title: 'New Role: PR Representative', time: '2h ago' },
                { title: 'Aisha Bowe session is live!', time: '1d ago' }
              ].map((note, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border-l-4 border-[#00629B]">
                  <p className="text-sm text-gray-700 font-bold mb-1">{note.title}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{note.time}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <h2 className="text-xl font-black mb-6">Recruitment Funnel</h2>
            <div className="space-y-6 relative z-10">
              {MOCK_APPLICATIONS.map((app) => (
                <div key={app.id} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm">{app.roleTitle}</p>
                    <span className="text-[10px] font-black bg-white/10 text-blue-300 px-2 py-1 rounded-full uppercase">
                      {app.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
                      <span>Applied</span>
                      <span>Interview</span>
                      <span>Offer</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00629B] h-full transition-all duration-1000" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <CheckBadgeIcon className="h-24 w-24 text-white" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
