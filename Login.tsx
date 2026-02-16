
import React from 'react';
import { IEEE_BRAND } from '../constants';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 relative z-10 border border-gray-100">
        <div className="text-center space-y-6">
          <img src={IEEE_BRAND.logo} alt="IEEE Logo" className="h-12 mx-auto" />
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">IEEE IGDTUW</h1>
            <p className="text-gray-500 font-medium">Empowering women in technology since 2004.</p>
          </div>

          <div className="py-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=600" 
                alt="Momentum Event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Experience Momentum</p>
              </div>
            </div>
          </div>

          <button 
            onClick={onLogin}
            className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 py-4 px-6 rounded-2xl hover:bg-gray-50 transition-all hover:shadow-md group active:scale-95"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
            <span className="font-bold text-gray-700">Sign in with Google</span>
          </button>

          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
            Use your IGDTUW institutional email
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-gray-400 text-xs font-medium">IGDTUW Student Branch • Region 10</p>
      </div>
    </div>
  );
};

export default Login;
