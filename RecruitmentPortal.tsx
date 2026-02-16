
import React from 'react';
import { MOCK_ROLES, MOCK_APPLICATIONS } from '../constants';
import { User } from '../types';
import { BriefcaseIcon, AcademicCapIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const RecruitmentPortal: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[2.5rem] text-white overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-black mb-6">Join the Legacy.</h1>
          <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
            Apply for organizational roles within IEEE IGDTUW and build your leadership portfolio while contributing to the world's largest technical professional organization.
          </p>
          <div className="flex space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="h-10 w-10 rounded-full border-2 border-black" src={`https://picsum.photos/id/${i+10}/50/50`} alt="Member" />
              ))}
            </div>
            <p className="text-sm self-center font-bold text-blue-400">+200 members strong</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none">
          <div className="grid grid-cols-2 gap-2 transform rotate-12 translate-x-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/20 aspect-square rounded-2xl"></div>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-black text-gray-900">Open Positions</h2>
          <div className="space-y-6">
            {MOCK_ROLES.map(role => (
              <div key={role.id} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-[#00629B] transition-colors">{role.title}</h3>
                    <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <BriefcaseIcon className="h-4 w-4 mr-1" /> {role.department}
                    </div>
                  </div>
                  <div className="bg-blue-50 text-[#00629B] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                    Deadline: {role.deadline}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center">
                      <AcademicCapIcon className="h-4 w-4 mr-2" /> Eligibility
                    </p>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{role.eligibility}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center">
                      <ClockIcon className="h-4 w-4 mr-2" /> Description
                    </p>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{role.description}</p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#00629B] transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-black text-gray-900 mb-6">Application History</h2>
            {MOCK_APPLICATIONS.length > 0 ? (
              <div className="space-y-6">
                {MOCK_APPLICATIONS.map(app => (
                  <div key={app.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-900">{app.roleTitle}</p>
                      <span className="text-[10px] font-black bg-blue-100 text-[#00629B] px-2 py-1 rounded uppercase tracking-tighter">
                        {app.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-bold uppercase">
                      <span>Applied {app.appliedAt}</span>
                    </div>
                    {/* Progress indicator */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map(step => (
                        <div key={step} className={`h-1 flex-1 rounded-full ${step <= 2 ? 'bg-[#00629B]' : 'bg-gray-100'}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 font-medium">You haven't applied for any roles yet.</p>
            )}
          </section>

          <section className="bg-[#00629B] rounded-3xl p-8 text-white">
            <h2 className="text-xl font-black mb-4">Why join IEEE?</h2>
            <div className="space-y-4">
              {[
                'Global Networking Opportunities',
                'Access to IEEE Xplore Digital Library',
                'Leadership Training & Certification',
                'National & International Conferences'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-blue-300 shrink-0" />
                  <p className="text-sm font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-3 bg-white text-[#00629B] rounded-xl font-bold text-sm hover:shadow-lg transition-all">
              Learn more about IEEE
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPortal;
