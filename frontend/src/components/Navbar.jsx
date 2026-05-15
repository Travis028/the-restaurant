import { Link, useLocation } from 'react-router-dom';
import { Search, Globe } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const NavLink = ({ to, label }) => {
    const isActive = path === to || (path === '/' && to === '/');
    return (
      <Link 
        to={to} 
        className={`text-[13px] font-bold transition-colors relative flex items-center h-full ${
          isActive ? 'text-navy' : 'text-gray-600 hover:text-navy'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-navy rounded-t-md"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white h-[76px] flex items-center justify-between px-6 lg:px-10 shadow-sm border-b border-gray-100">
      {/* Logo Area */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.svg" alt="GSEF Logo" className="h-11 w-11 object-contain" />
        <div className="flex flex-col justify-center">
          <span className="font-display font-extrabold text-[#111827] text-[24px] leading-none tracking-tight">GSEF</span>
          <span className="text-[6.5px] font-extrabold text-gray-500 tracking-[0.1em] leading-[1.1] mt-1">
            GLOBAL SOMALI<br/>ENTREPRENEURSHIP FORUM
          </span>
        </div>
      </Link>
      
      {/* Center Links */}
      <div className="hidden xl:flex space-x-7 h-full items-center font-body pt-1">
        <NavLink to="/" label="Home" />
        <NavLink to="/events" label="Events" />
        <NavLink to="/activities" label="Activities" />
        <NavLink to="/reports" label="Reports" />
        <NavLink to="/gallery" label="Gallery" />
        <NavLink to="/founders" label="Founders" />
        <NavLink to="/companies" label="Companies" />
        <NavLink to="/membership" label="Membership" />
        <NavLink to="/training" label="Training" />
      </div>

      {/* Right Actions */}
      <div className="flex space-x-6 items-center">
        <button className="text-gray-500 hover:text-navy transition-colors">
          <Search size={18} strokeWidth={2.5} />
        </button>
        
        <div className="flex items-center gap-1.5 text-gray-600 font-bold text-[13px] cursor-pointer hover:text-navy">
          <Globe size={16} strokeWidth={2.5} /> EN
        </div>
        
        <div className="h-6 w-px bg-gray-200"></div>

        <Link to="/login" className="text-gray-600 font-bold text-[13px] hover:text-navy transition-colors">
          Login
        </Link>
        
        <button className="bg-gradient-to-r from-violet-600 to-orange-500 text-white px-7 py-2.5 rounded-full text-[13px] font-body font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all">
          Register / Buy Ticket
        </button>
      </div>
    </nav>
  );
}
