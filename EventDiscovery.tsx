
import React, { useState } from 'react';
import { MOCK_EVENTS } from '../constants';
import { UserRole, Event } from '../types';
import { MagnifyingGlassIcon, FunnelIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';

const EventDiscovery: React.FC<{ userRole: UserRole }> = ({ userRole }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Technical', 'Non-Technical', 'SIG', 'Conference'];

  const filteredEvents = filter === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-4">
        <h1 className="text-4xl font-black text-gray-900">Discover IEEE Events</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search hackathons, workshops..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#00629B] focus:outline-none font-medium"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all ${
                  filter === cat 
                  ? 'bg-[#00629B] text-white shadow-lg' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
            <div className="relative overflow-hidden aspect-video">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#00629B]">
                {event.category}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                 <div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center space-x-1">
                   <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   <span>{event.registrations} Enrolled</span>
                 </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                <span className="flex items-center"><CalendarDaysIcon className="h-3 w-3 mr-1" /> {event.date}</span>
                <span className="flex items-center"><MapPinIcon className="h-3 w-3 mr-1" /> {event.location}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-1">{event.description}</p>
              
              <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#00629B] transition-colors shadow-lg shadow-gray-200">
                View Details & Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDiscovery;
