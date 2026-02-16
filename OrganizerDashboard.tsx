
import React, { useState } from 'react';
import { User, Event } from '../types';
import { MOCK_EVENTS } from '../constants';
import { PlusIcon, QrCodeIcon, UserGroupIcon, MegaphoneIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const OrganizerDashboard: React.FC<{ user: User, onNavigate: (tab: string) => void }> = ({ user, onNavigate }) => {
  const [activeEvent, setActiveEvent] = useState<Event>(MOCK_EVENTS[0]);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Organizer Portal</h1>
          <p className="text-gray-500 font-medium">Manage your events and chapter operations</p>
        </div>
        <button className="bg-[#00629B] text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:shadow-lg transition-all active:scale-95">
          <PlusIcon className="h-5 w-5" />
          <span>Create New Event</span>
        </button>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Events', val: '12', icon: '📅', color: 'bg-blue-50' },
          { label: 'Active Regs', val: '582', icon: '👤', color: 'bg-green-50' },
          { label: 'Attendance Rate', val: '84%', icon: '📈', color: 'bg-purple-50' },
          { label: 'Pending Apps', val: '24', icon: '⏳', color: 'bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} p-6 rounded-3xl border border-white shadow-sm`}>
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-2xl font-black text-gray-900">{stat.val}</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Manage Event */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Live Management</h2>
              <select 
                className="bg-gray-50 border-none rounded-xl text-sm font-bold p-2 focus:ring-2 focus:ring-[#00629B]"
                value={activeEvent.id}
                onChange={(e) => setActiveEvent(MOCK_EVENTS.find(ev => ev.id === e.target.value) || MOCK_EVENTS[0])}
              >
                {MOCK_EVENTS.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
              </select>
            </div>

            <div className="p-6 bg-[#00629B] rounded-2xl text-white mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{activeEvent.title}</h3>
                  <p className="text-blue-100 text-sm">{activeEvent.date} • {activeEvent.location}</p>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <QrCodeIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <p className="text-xs uppercase font-bold text-blue-200 mb-1">Registered</p>
                  <p className="text-xl font-black">{activeEvent.registrations}</p>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <p className="text-xs uppercase font-bold text-blue-200 mb-1">Attended</p>
                  <p className="text-xl font-black">245</p>
                </div>
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <p className="text-xs uppercase font-bold text-blue-200 mb-1">Pending</p>
                  <p className="text-xl font-black">{activeEvent.registrations - 245}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group">
                <QrCodeIcon className="h-8 w-8 text-[#00629B] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-700">Scan Attendance</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group">
                <UserGroupIcon className="h-8 w-8 text-[#00629B] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-700">Guest List</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group">
                <MegaphoneIcon className="h-8 w-8 text-[#00629B] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-700">Broadcast</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group">
                <ArrowUpTrayIcon className="h-8 w-8 text-[#00629B] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-gray-700">Export Report</span>
              </button>
            </div>
          </section>
        </div>

        {/* Recent Attendance */}
        <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <h2 className="text-xl font-black text-gray-900 mb-6">Live Check-in Feed</h2>
          <div className="flex-1 space-y-4 overflow-y-auto">
            {[
              { name: 'Aditi Sharma', time: '12:05 PM', id: 'IEEE-2312' },
              { name: 'Priya Verma', time: '12:04 PM', id: 'IEEE-1109' },
              { name: 'Sneha Kapur', time: '12:02 PM', id: 'IEEE-8827' },
              { name: 'Riya Gupta', time: '12:01 PM', id: 'IEEE-4451' },
              { name: 'Ananya Roy', time: '11:59 AM', id: 'IEEE-0922' },
              { name: 'Tanvi Singh', time: '11:58 AM', id: 'IEEE-3341' },
            ].map((check, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b border-gray-50 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#00629B]">
                    {check.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{check.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">{check.id}</p>
                  </div>
                </div>
                <p className="text-xs font-bold text-green-600">{check.time}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm">View Full History</button>
        </section>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
