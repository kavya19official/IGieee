
import React from 'react';
import { ABOUT_CONTENT, IEEE_BRAND } from '../constants';
import { GlobeAltIcon, SparklesIcon, ScaleIcon, UsersIcon } from '@heroicons/react/24/solid';

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in max-w-4xl mx-auto">
      {/* Brand Hero */}
      <section className="text-center space-y-6">
        <img src={IEEE_BRAND.logo} alt="IEEE" className="h-16 mx-auto mb-4" />
        <h1 className="text-5xl font-black text-gray-900 tracking-tight">IEEE IGDTUW Student Branch</h1>
        <div className="w-24 h-2 bg-[#00629B] mx-auto rounded-full"></div>
      </section>

      {/* Vision */}
      <section className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-blue-50 transition-colors">
           <SparklesIcon className="h-32 w-32" />
         </div>
         <div className="relative z-10 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#00629B]">Our Vision</h2>
            <p className="text-3xl font-bold text-gray-900 italic leading-snug">
              “{ABOUT_CONTENT.vision}”
            </p>
         </div>
      </section>

      {/* History & Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-gray-900 text-white p-10 rounded-[2.5rem] space-y-4">
          <div className="h-12 w-12 bg-[#00629B] rounded-2xl flex items-center justify-center mb-6">
            <GlobeAltIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-black">History</h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            {ABOUT_CONTENT.history}
          </p>
        </section>

        <section className="bg-blue-50 p-10 rounded-[2.5rem] space-y-4 border border-blue-100">
          <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <ScaleIcon className="h-6 w-6 text-[#00629B]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Activities & Opportunities</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            {ABOUT_CONTENT.activities}
          </p>
        </section>
      </div>

      {/* Mission */}
      <section className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm text-center space-y-8">
        <div className="inline-flex p-4 bg-green-50 rounded-full text-green-600 mb-4">
          <UsersIcon className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-black text-gray-900">Our Mission & Engagement</h2>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          {ABOUT_CONTENT.mission}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { name: 'IEEE Week', color: 'bg-blue-100 text-blue-700' },
            { name: 'IEEE Day', color: 'bg-purple-100 text-purple-700' },
            { name: 'SIGs', color: 'bg-orange-100 text-orange-700' },
          ].map((tag, i) => (
            <div key={i} className={`${tag.color} p-6 rounded-2xl font-black text-lg shadow-sm border border-white`}>
              {tag.name}
            </div>
          ))}
        </div>
      </section>

      {/* Social / Footing */}
      <section className="text-center pt-8 border-t border-gray-100 pb-12">
        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4">Follow IEEE IGDTUW</p>
        <div className="flex justify-center space-x-6">
          {['LinkedIn', 'Instagram', 'X (Twitter)', 'IEEE.org'].map(social => (
            <button key={social} className="text-gray-600 hover:text-[#00629B] font-black text-sm transition-colors">{social}</button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
