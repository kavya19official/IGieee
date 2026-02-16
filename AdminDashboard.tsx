
import React from 'react';
import { User } from '../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { ShieldCheckIcon, UsersIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const data = [
  { name: 'Jan', reg: 400, att: 240 },
  { name: 'Feb', reg: 300, att: 139 },
  { name: 'Mar', reg: 200, att: 980 },
  { name: 'Apr', reg: 278, att: 390 },
  { name: 'May', reg: 189, att: 480 },
  { name: 'Jun', reg: 239, att: 380 },
];

const AdminDashboard: React.FC<{ user: User, onNavigate: (tab: string) => void }> = ({ user, onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Governance Console</h1>
          <p className="text-gray-500 font-medium">IEEE IGDTUW System Administration</p>
        </div>
        <div className="flex space-x-3">
           <button className="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-gray-200">
             <ShieldCheckIcon className="h-6 w-6" />
           </button>
        </div>
      </header>

      {/* Admin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Analytics Card */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900">Registration Trends</h2>
            <div className="flex space-x-2">
              <span className="flex items-center space-x-1 text-xs font-bold text-[#00629B]">
                <span className="h-2 w-2 rounded-full bg-[#00629B]"></span>
                <span>Registrations</span>
              </span>
              <span className="flex items-center space-x-1 text-xs font-bold text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>Attendance</span>
              </span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00629B" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#00629B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="reg" stroke="#00629B" strokeWidth={3} fillOpacity={1} fill="url(#colorReg)" />
                <Area type="monotone" dataKey="att" stroke="#10b981" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions & Controls */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-4">Pending Approvals</h3>
            <div className="space-y-3">
              {[
                { type: 'Event', name: 'Alumni Meet 2024', by: 'Ishita' },
                { type: 'Recruitment', name: 'Review Designers', by: 'System' },
                { type: 'Financial', name: 'SIG Budget Request', by: 'Tanu' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-tighter">{item.type}</p>
                    <p className="text-sm font-bold text-gray-900 truncate max-w-[120px]">{item.name}</p>
                  </div>
                  <button className="bg-[#00629B] text-white p-2 rounded-lg hover:shadow-md">
                    <CheckCircleIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-xs font-bold text-[#00629B] uppercase hover:bg-blue-50 rounded-lg">View All Queue</button>
          </div>

          <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
            <h3 className="text-lg font-black text-red-900 mb-2">System Health</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-1 bg-red-200 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: '88%' }}></div>
              </div>
              <span className="text-xs font-bold text-red-900">88%</span>
            </div>
            <p className="text-xs text-red-700 font-medium">Database sync lag detected in 2 clusters. Last backup: 4h ago.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Members', count: '1,420', change: '+12%', icon: UsersIcon, color: 'text-blue-600' },
          { label: 'Active Roles', count: '45', change: '0%', icon: ShieldCheckIcon, color: 'text-purple-600' },
          { label: 'Storage Used', count: '2.4 GB', change: '+4%', icon: CheckCircleIcon, color: 'text-green-600' },
          { label: 'Safety Flags', count: '0', change: '-100%', icon: ExclamationTriangleIcon, color: 'text-gray-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-2xl bg-gray-50 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">{stat.label}</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl font-black text-gray-900">{stat.count}</span>
                <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
