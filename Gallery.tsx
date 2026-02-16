
import React, { useState } from 'react';
import { PhotoIcon, PlayIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';

const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=1200', title: 'Momentum: Speaker Session', category: 'Technical' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200', title: 'Panel Discussion: STEM Careers', category: 'Conference' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200', title: 'Hackathon Collaborations', category: 'Technical' },
  { id: 4, src: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=1200', title: 'SIG: Robotics Workshop', category: 'SIG' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200', title: 'Annual Chapter Meet', category: 'Institutional' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200', title: 'IEEE Day Celebrations', category: 'Social' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Technical', 'Conference', 'SIG', 'Institutional', 'Social'];

  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Institutional Archive</h1>
          <p className="text-gray-500 font-medium">Visual journey of IEEE IGDTUW through the years.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all ${
                filter === cat 
                ? 'bg-[#00629B] text-white shadow-xl shadow-blue-100' 
                : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all aspect-[4/5]">
            <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
               <span className="text-[10px] font-black uppercase text-[#00629B] tracking-[0.3em] mb-2 bg-white inline-block w-fit px-3 py-1 rounded-full">{item.category}</span>
               <h3 className="text-2xl font-black text-white leading-tight mb-4">{item.title}</h3>
               <button className="flex items-center space-x-2 text-white/70 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
                  <ViewColumnsIcon className="h-5 w-5" />
                  <span>View Album</span>
               </button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-[3.5rem] p-12 md:p-20 text-center border border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="inline-flex h-20 w-20 bg-[#00629B] rounded-3xl items-center justify-center shadow-2xl shadow-blue-200">
             <PhotoIcon className="h-10 w-10 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Community Submissions</h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Help us document our technical workshops and community meetups. 
              Share your high-quality event photos directly with the Media Team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-black text-sm hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center space-x-3">
              <PhotoIcon className="h-5 w-5" />
              <span>Submit Media</span>
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-10 py-5 rounded-[2rem] font-black text-sm hover:bg-gray-50 transition-all flex items-center justify-center space-x-3">
              <PlayIcon className="h-5 w-5" />
              <span>Video Reels</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
