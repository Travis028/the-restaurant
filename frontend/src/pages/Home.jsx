import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircle, CheckCircle2, User, Mic, Globe, Building2, PieChart, 
  Network, BookOpen, DollarSign, TrendingUp, Calendar, MapPin, 
  Download, MoreVertical, FileText
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-[#F3F4F6] min-h-screen font-body pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full max-w-[1600px] mx-auto h-auto lg:h-[600px] lg:mt-4 mb-24 px-0 lg:px-4">
        {/* The curved dark container */}
        <div className="relative w-full h-full bg-[#0d1326] lg:rounded-[40px] lg:rounded-br-[120px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Right side image - Desktop absolute, Mobile relative */}
          <div className="lg:absolute top-0 right-0 w-full lg:w-[55%] h-[300px] lg:h-full order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover object-center" alt="Conference" />
            {/* Gradient overlay to blend left to right */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d1326] via-[#0d1326]/80 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full lg:w-[65%] h-full flex flex-col justify-center px-6 lg:px-20 py-10 lg:py-0 order-2 lg:order-1">
            <h1 className="text-white font-display font-extrabold text-4xl lg:text-[56px] leading-[1.1] tracking-tight mb-4">
              Empowering Somali<br className="hidden lg:block"/>Entrepreneurs. Connecting<br className="hidden lg:block"/>a <span className="text-[#FBBF24]">Global Community.</span>
            </h1>
            <p className="text-white/80 font-body text-[15px] lg:text-[16px] max-w-xl mb-8 leading-relaxed">
              Join innovators, investors & leaders shaping the future of the Somali entrepreneurship ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-16">
              <button className="bg-[#00A67E] text-white px-6 py-3 rounded-full font-bold text-[14px] flex justify-center items-center gap-2 hover:bg-[#008f6b] transition-colors">
                Explore GSEF 2025 <span>→</span>
              </button>
              <button className="bg-white text-[#0d1326] px-6 py-3 rounded-full font-bold text-[14px] flex justify-center items-center gap-2 hover:bg-gray-100 transition-colors">
                <PlayCircle size={18} /> Watch Highlights
              </button>
            </div>
            
            {/* Countdown integrated into the hero bottom */}
            <div className="bg-[#2B1566] lg:absolute bottom-0 left-[10%] rounded-2xl lg:rounded-t-2xl lg:rounded-b-none px-6 lg:px-10 py-4 flex gap-4 lg:gap-8 justify-center items-center shadow-xl">
               <div className="text-center">
                 <div className="text-white font-display text-2xl lg:text-3xl font-bold">45</div>
                 <div className="text-white/60 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-1">Days</div>
               </div>
               <div className="text-white/30 font-bold text-xl lg:text-2xl pb-3">.</div>
               <div className="text-center">
                 <div className="text-white font-display text-2xl lg:text-3xl font-bold">12</div>
                 <div className="text-white/60 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-1">Hours</div>
               </div>
               <div className="text-white/30 font-bold text-xl lg:text-2xl pb-3">.</div>
               <div className="text-center">
                 <div className="text-white font-display text-2xl lg:text-3xl font-bold">30</div>
                 <div className="text-white/60 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-1">Minutes</div>
               </div>
               <div className="text-white/30 font-bold text-xl lg:text-2xl pb-3">.</div>
               <div className="text-center">
                 <div className="text-white font-display text-2xl lg:text-3xl font-bold">22</div>
                 <div className="text-white/60 text-[9px] lg:text-[10px] uppercase font-bold tracking-wider mt-1">Seconds</div>
               </div>
            </div>
          </div>
        </div>

        {/* Floating elements on Right */}
        <div className="hidden xl:flex absolute top-10 right-20 z-20 flex-col gap-4">
          <div className="bg-white rounded-[20px] p-5 shadow-2xl w-[260px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#00A67E] text-white p-0.5 rounded-full"><CheckCircle2 size={12} /></div>
              <span className="text-[11px] font-bold text-gray-800 tracking-wide">Next Forum</span>
            </div>
            <h3 className="font-display font-extrabold text-[24px] text-navy mb-2">GSEF 2025</h3>
            <div className="space-y-1.5 text-[12px] text-gray-500 font-medium">
              <div className="flex items-center gap-2"><Calendar size={14} className="text-[#e86e3b]" /> July 19–20, 2025</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-[#e86e3b]" /> Radisson Blu, Nairobi</div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-5 shadow-2xl w-[260px] text-center relative border border-gray-100">
            <div className="flex justify-between items-center mb-3">
               <h3 className="font-display font-bold text-[16px] text-navy">Your Ticket</h3>
               <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
            <div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 p-2 flex justify-center items-center border border-gray-100">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GSEF2025" className="w-full h-full rounded-lg mix-blend-multiply" alt="QR" />
            </div>
            <button className="w-[80%] mx-auto bg-[#00A67E] text-white font-bold text-[13px] py-1.5 rounded-full mb-3 block">VIP Access</button>
            <div className="bg-gray-50 rounded-lg py-2 px-3 border border-gray-100 text-[11px] font-mono text-gray-600 flex justify-between items-center mt-2">
              GSEF2025-VIP-001234
              <FileText size={12} className="cursor-pointer hover:text-navy" />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="lg:absolute -bottom-8 left-0 right-0 z-30 flex justify-center px-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl lg:rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-4 px-6 lg:px-10 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-6 lg:gap-12 w-full lg:w-max border border-gray-100">
             
             <div className="flex items-center gap-3">
               <div className="text-[#00A67E] bg-[#00A67E]/10 p-2 rounded-full"><Users size={20} /></div>
               <div className="text-left">
                 <div className="font-display font-extrabold text-navy text-lg leading-none">500+</div>
                 <div className="font-body text-gray-500 text-[11px] font-medium">Expected Attendees</div>
               </div>
             </div>

             <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

             <div className="flex items-center gap-3">
               <div className="text-[#e86e3b] bg-[#e86e3b]/10 p-2 rounded-full"><Mic size={20} /></div>
               <div className="text-left">
                 <div className="font-display font-extrabold text-navy text-lg leading-none">30+</div>
                 <div className="font-body text-gray-500 text-[11px] font-medium">Speakers</div>
               </div>
             </div>

             <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

             <div className="flex items-center gap-3">
               <div className="text-[#0ea5e9] bg-[#0ea5e9]/10 p-2 rounded-full"><Globe size={20} /></div>
               <div className="text-left">
                 <div className="font-display font-extrabold text-navy text-lg leading-none">20+</div>
                 <div className="font-body text-gray-500 text-[11px] font-medium">Countries</div>
               </div>
             </div>

             <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

             <div className="flex items-center gap-3">
               <div className="text-[#10b981] bg-[#10b981]/10 p-2 rounded-full"><Building2 size={20} /></div>
               <div className="text-left">
                 <div className="font-display font-extrabold text-navy text-lg leading-none">100+</div>
                 <div className="font-body text-gray-500 text-[11px] font-medium">Companies</div>
               </div>
             </div>

             <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

             <div className="flex items-center gap-3">
               <div className="text-[#8b5cf6] bg-[#8b5cf6]/10 p-2 rounded-full"><PieChart size={20} /></div>
               <div className="text-left">
                 <div className="font-display font-extrabold text-navy text-lg leading-none">6</div>
                 <div className="font-body text-gray-500 text-[11px] font-medium">Sectors Covered</div>
               </div>
             </div>

          </div>
        </div>
      </div>

      {/* 3. MAIN GRID */}
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-12 gap-6 mt-16">
        
        {/* ROW 1 */}
        {/* Featured Event */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5 h-full flex flex-col">
             <div className="flex justify-between items-center mb-4">
               <h2 className="font-display font-bold text-[17px] text-navy">Featured Event</h2>
               <span className="bg-[#6b31b2] text-white text-[9px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">Upcoming</span>
             </div>
             
             <div className="bg-gradient-to-br from-[#412185] via-[#853580] to-[#e0622d] rounded-[16px] p-6 text-white relative overflow-hidden flex-grow flex flex-col justify-between">
               {/* Decorative glow */}
               <div className="absolute top-10 right-0 w-32 h-32 bg-white/10 blur-[30px] rounded-full"></div>
               <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#e0622d]/40 blur-[40px] rounded-full"></div>
               
               <div className="relative z-10">
                 <h3 className="font-display font-extrabold text-[28px] mb-1">GSEF 2025</h3>
                 <p className="font-body text-[12px] font-medium opacity-90 mb-6">Global Somali Entrepreneurship Forum</p>
                 
                 <div className="space-y-2.5 mb-6 font-body text-[12px] opacity-90 font-medium">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-[#e86e3b]" /> July 19–20, 2025</div>
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-[#e86e3b]" /> Radisson Blu, Nairobi</div>
                 </div>
                 
                 <p className="text-[12px] opacity-80 leading-relaxed mb-6 font-medium">
                   Two days of networking, insights, and opportunities with global Somali entrepreneurs & investors.
                 </p>
               </div>
               
               <button className="relative z-10 bg-white text-navy font-bold text-[12px] py-3 px-5 rounded-full hover:bg-gray-50 w-max transition-colors">
                 View Event Details →
               </button>
             </div>
          </div>
        </div>

        {/* Choose Your Pass */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 h-full flex flex-col">
             <h2 className="font-display font-bold text-[17px] text-navy mb-5">Choose Your Pass</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
                {/* Regular Pass */}
                <div className="border border-gray-100 rounded-2xl p-5 flex flex-col text-center hover:border-[#00A67E] hover:shadow-md transition-all group">
                   <div className="w-10 h-10 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-[#00A67E] mb-3 group-hover:bg-[#00A67E] group-hover:text-white transition-colors">
                     <User size={18} strokeWidth={2.5}/>
                   </div>
                   <h3 className="font-bold text-navy text-[15px]">Regular</h3>
                   <div className="font-extrabold text-[18px] text-navy my-2">KES 3,000</div>
                   <ul className="text-left space-y-2.5 mb-6 flex-grow">
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> General Session Access</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Panel Discussions</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Networking Lunch</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Digital Certificate</li>
                   </ul>
                   <button className="w-full border border-gray-200 text-gray-700 font-bold text-[12px] py-2.5 rounded-full hover:bg-gray-50 transition-colors">Select Pass</button>
                </div>
                
                {/* VIP Pass */}
                <div className="border-2 border-[#F59E0B] rounded-2xl p-5 flex flex-col text-center shadow-lg relative bg-white z-10 scale-[1.03]">
                   <div className="w-10 h-10 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-3">
                     <span className="text-xl">👑</span>
                   </div>
                   <h3 className="font-bold text-navy text-[15px]">VIP</h3>
                   <div className="font-extrabold text-[18px] text-navy my-2">KES 10,000</div>
                   <ul className="text-left space-y-2.5 mb-6 flex-grow">
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> All Regular Benefits</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> VIP Lounge Access</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Meet the Speakers</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Priority Seating</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Exclusive Roundtable</li>
                   </ul>
                   <button className="w-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-bold text-[12px] py-2.5 rounded-full hover:shadow-md transition-all">Select VIP</button>
                </div>

                {/* Premium Pass */}
                <div className="border border-gray-100 rounded-2xl p-5 flex flex-col text-center hover:border-purple-500 hover:shadow-md transition-all group">
                   <div className="w-10 h-10 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                     <span className="text-xl leading-none">💎</span>
                   </div>
                   <h3 className="font-bold text-navy text-[15px]">Premium VIP</h3>
                   <div className="font-extrabold text-[18px] text-navy my-2">KES 25,000</div>
                   <ul className="text-left space-y-2.5 mb-6 flex-grow">
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> All VIP Benefits</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Investor Pitching Slot</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> 1-on-1 Meetings</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Event Merchandise Pack</li>
                     <li className="flex items-start gap-2 text-[10px] text-gray-600 font-medium"><CheckCircle2 size={12} className="text-[#00A67E] shrink-0 mt-0.5"/> Post-Event Directory</li>
                   </ul>
                   <button className="w-full border border-gray-200 text-gray-700 font-bold text-[12px] py-2.5 rounded-full hover:bg-gray-50 transition-colors">Select Premium</button>
                </div>
             </div>
          </div>
        </div>

        {/* Latest Reports + Phone Mockup Layout */}
        <div className="col-span-12 lg:col-span-4 relative flex flex-col gap-6 h-full">
           
           {/* Latest Reports */}
           <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 h-full xl:pr-24">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="font-display font-bold text-[17px] text-navy">Latest Reports</h2>
                 <a href="#" className="text-blue-600 text-[12px] font-bold">View All →</a>
              </div>

              <div className="space-y-5">
                 <div className="flex gap-4 border border-gray-100 p-3 rounded-xl hover:shadow-sm transition-all group">
                    <div className="w-[80px] h-[90px] bg-gray-200 rounded-lg overflow-hidden shrink-0">
                       <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Report" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                       <h4 className="font-bold text-[13px] text-navy leading-tight mb-1.5">GSEF 2024<br/>Impact Report</h4>
                       <p className="text-[10px] text-gray-400 mb-2">Oct 2024 - PDF</p>
                       <Download size={14} className="text-[#00A67E] group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 border border-gray-100 p-3 rounded-xl hover:shadow-sm transition-all group">
                    <div className="w-[80px] h-[90px] bg-gray-200 rounded-lg overflow-hidden shrink-0">
                       <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Report" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                       <h4 className="font-bold text-[13px] text-navy leading-tight mb-1.5">East Africa Innovation<br/>& Investment Trends</h4>
                       <p className="text-[10px] text-gray-400 mb-2">Jul 2025 - PDF</p>
                       <Download size={14} className="text-[#00A67E] group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                 </div>

                 <div className="flex gap-4 border border-gray-100 p-3 rounded-xl hover:shadow-sm transition-all group">
                    <div className="w-[80px] h-[90px] bg-gray-200 rounded-lg overflow-hidden shrink-0">
                       <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Report" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                       <h4 className="font-bold text-[13px] text-navy leading-tight mb-1.5">Women in Somali<br/>Entrepreneurship</h4>
                       <p className="text-[10px] text-gray-400 mb-2">Jul 2025 - PDF</p>
                       <Download size={14} className="text-[#00A67E] group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                 </div>
              </div>
           </div>

           {/* Admin Phone Mockup (Visible only on XL screens to overlap) */}
           <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-[40%] w-[250px] h-[520px] bg-[#0f172a] rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-[6px] border-gray-800 overflow-hidden flex-col z-20">
              {/* Notch */}
              <div className="w-[100px] h-[24px] bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-30"></div>
              
              {/* App Header */}
              <div className="pt-10 px-5 pb-4 flex justify-between items-center text-white">
                 <h3 className="font-bold text-[14px]">Admin Dashboard</h3>
                 <MoreVertical size={16} />
              </div>
              
              {/* App Body Layout */}
              <div className="flex-grow flex bg-[#1e293b] rounded-tl-2xl rounded-tr-2xl overflow-hidden p-2 gap-2">
                 {/* Sidebar inside app */}
                 <div className="w-[60px] bg-[#0f172a] rounded-xl flex flex-col gap-3 items-center py-4 text-white/50 text-[9px]">
                    <div className="text-white flex flex-col items-center gap-1"><PieChart size={14}/> Overview</div>
                    <div className="flex flex-col items-center gap-1 hover:text-white"><Calendar size={14}/> Events</div>
                    <div className="flex flex-col items-center gap-1 hover:text-white relative"><FileText size={14}/> Tickets <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[7px] px-1 rounded">248</span></div>
                    <div className="flex flex-col items-center gap-1 hover:text-white relative"><CheckCircle2 size={14}/> Check-ins <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[7px] px-1 rounded">142</span></div>
                    <div className="flex flex-col items-center gap-1 hover:text-white"><User size={14}/> Members</div>
                 </div>
                 
                 {/* App Main Area */}
                 <div className="flex-grow flex flex-col gap-3 pt-2">
                    {/* Circle Chart */}
                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                       <div className="font-bold text-[11px] text-navy mb-2">Live Check-ins</div>
                       <div className="w-[90px] h-[90px] rounded-full border-[5px] border-[#00A67E] border-r-gray-100 mx-auto flex items-center justify-center flex-col shadow-inner">
                          <span className="font-display font-bold text-[26px] leading-none text-navy mt-1">142</span>
                          <span className="text-[9px] text-gray-400 font-bold">/500</span>
                       </div>
                       <div className="text-[#00A67E] text-[10px] font-bold mt-2">28.4%</div>
                    </div>
                    
                    {/* Recent Scans */}
                    <div className="bg-white rounded-xl p-3 shadow-sm flex-grow">
                       <div className="font-bold text-[11px] text-navy mb-3">Recent Scans</div>
                       <div className="flex items-center gap-2 mb-3">
                          <img src="https://i.pravatar.cc/100?img=11" className="w-6 h-6 rounded-full object-cover"/>
                          <div className="text-[9px] text-navy font-bold leading-tight">VIP - 001234<br/><span className="text-gray-400 font-medium">Checked in - 10:24 AM</span></div>
                       </div>
                       <div className="flex items-center gap-2 mb-3">
                          <img src="https://i.pravatar.cc/100?img=12" className="w-6 h-6 rounded-full object-cover"/>
                          <div className="text-[9px] text-navy font-bold leading-tight">REG - 005678<br/><span className="text-gray-400 font-medium">Checked in - 10:21 AM</span></div>
                       </div>
                       <div className="flex items-center gap-2">
                          <img src="https://i.pravatar.cc/100?img=13" className="w-6 h-6 rounded-full object-cover"/>
                          <div className="text-[9px] text-navy font-bold leading-tight">VIP - 009876<br/><span className="text-gray-400 font-medium">Checked in - 10:12 AM</span></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* ROW 2 */}
        {/* Why Join GSEF? */}
        <div className="col-span-12 lg:col-span-6 bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 flex flex-col justify-center">
           <h2 className="font-display font-bold text-[17px] text-navy mb-5">Why Join GSEF?</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Network size={18}/></div>
                 <h4 className="font-bold text-[14px] text-navy">Network</h4>
                 <p className="text-[11px] text-gray-500 leading-snug font-medium">Connect with 500+ entrepreneurs & investors</p>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><BookOpen size={18}/></div>
                 <h4 className="font-bold text-[14px] text-navy">Learn</h4>
                 <p className="text-[11px] text-gray-500 leading-snug font-medium">Access high-level panels & expert workshops</p>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600"><DollarSign size={18}/></div>
                 <h4 className="font-bold text-[14px] text-navy">Invest</h4>
                 <p className="text-[11px] text-gray-500 leading-snug font-medium">Discover funding & partnership opportunities</p>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500"><TrendingUp size={18}/></div>
                 <h4 className="font-bold text-[14px] text-navy">Grow</h4>
                 <p className="text-[11px] text-gray-500 leading-snug font-medium">Scale your business across East Africa & beyond</p>
              </div>
           </div>
        </div>

        {/* Our Partners */}
        <div className="col-span-12 lg:col-span-6 bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 flex flex-col justify-center">
           <h2 className="font-display font-bold text-[17px] text-navy mb-5">Our Partners</h2>
           <div className="flex flex-wrap items-center gap-6 xl:gap-8 justify-between xl:justify-start overflow-hidden w-full">
              <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 hover:shadow-sm transition-all h-[50px] min-w-[100px] justify-center">
                 <div className="w-6 h-6 bg-blue-500 text-white text-[8px] font-bold flex items-center justify-center rounded-sm leading-none text-center">UN<br/>DP</div>
              </div>
              <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 hover:shadow-sm transition-all h-[50px] min-w-[120px] justify-center">
                 <div className="font-display font-extrabold text-blue-800 text-[13px] tracking-tight">SIMAD <span className="text-orange-500">i</span>Lab</div>
              </div>
              <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 hover:shadow-sm transition-all h-[50px] min-w-[100px] justify-center">
                 <div className="font-bold text-navy text-[12px] flex items-center gap-1"><span className="text-lg bg-orange-500 text-white rounded-full w-5 h-5 flex justify-center items-center">K</span> KICC <span className="text-[8px] text-gray-400">nairobi</span></div>
              </div>
              <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 hover:shadow-sm transition-all h-[50px] min-w-[120px] justify-center">
                 <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-navy leading-none">Ministry of Trade</span>
                 </div>
              </div>
              <div className="hidden xl:flex w-8 h-8 rounded-full bg-gray-50 items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer">
                 <span className="font-bold leading-none mb-1">&gt;</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
