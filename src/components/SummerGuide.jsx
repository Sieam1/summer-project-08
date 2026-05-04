"use client";
import React from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function SummerGuide() {
  const guides = [
    {
      id: 2,
      title: "Discover the best beach vibes.",
      subTitle: "STYLING TIPS FOR YOUR NEXT TRIP",
      desc: "Ready for your next adventure? Learn how to style light colors and loose fits for ultimate comfort and style.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      location: "Saint Martin",
      status: "Trip Ready 100%",
      btnText: "View Styling Tips",
      bgColor: "bg-[#F3F4F6]" 
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {guides.map((guide) => (
          <div 
            key={guide.id}
            className={`relative rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center p-6 lg:p-12 gap-10 shadow-sm border border-slate-100 ${guide.bgColor}`}
          >
           
            <div className="w-full lg:w-1/2 space-y-6 z-10">
              <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.2em]">
                {guide.subTitle}
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                {guide.title}
              </h2>
              
              <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium">
                {guide.desc}
              </p>
              
              <button className="group flex items-center gap-3 bg-[#334155] text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95">
                {guide.btnText}
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/40 transition-colors">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>

            {/* RIGHT IMAGE AREA WITH FLOATING ELEMENTS */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Location Tag (Top Right) */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-bounce-slow">
                <MapPin size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold text-slate-800">{guide.location}</span>
              </div>

              
              <div className="absolute -bottom-4 right-4 lg:right-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 w-52 transform transition-transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-600">
                      <CheckCircle2 size={20} />
                   </div>
                   <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase leading-none">Status</p>
                      <p className="text-slate-900 font-bold text-xs">{guide.status}</p>
                   </div>
                </div>
               
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                   <div className="w-full h-full bg-emerald-500 rounded-full"></div>
                </div>
                <p className="text-[9px] text-emerald-500 font-black mt-1 text-right">100%</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}