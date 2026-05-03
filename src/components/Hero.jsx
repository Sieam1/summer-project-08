"use client";
import React from 'react';
import Link from "next/link"; 

const Hero = () => {
  // Smooth scroll function for the button
  const scrollToEssentials = (e) => {
    e.preventDefault();
    const target = document.getElementById("curated-essentials");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-auto lg:h-[85vh] flex items-center bg-[#f8fafc] overflow-hidden pt-24 pb-16 lg:py-0">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[100px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-700 font-extrabold uppercase tracking-widest text-[10px]">
              Hot Deals 🔥
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter uppercase">
            SUMMER SALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              50% OFF
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Grab our premium summer essentials designed for ultimate comfort and style for both men and women. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            {/* Smooth Scroll Button */}
            <button 
              onClick={scrollToEssentials}
              className="group relative px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 shadow-lg active:scale-95 text-sm"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button 
              href="/sale" 
              className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all text-sm"
            >
              View Offers
            </button>
          </div>
        </div>

        {/* Right Content - Lifestyle Image for Men & Women */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            <div className="relative z-20 w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* Updated to a Lifestyle/Unisex Image */}
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80" 
                alt="Curated Summer Lifestyle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -left-6 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
               <div className="flex items-center gap-3">
                  <div className="text-xl">☀️</div>
                  <div>
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-tighter leading-none">Unisex</p>
                    <p className="text-slate-900 font-bold text-xs">Summer Essentials</p>
                  </div>
               </div>
            </div>

            <div className="absolute -top-6 -right-6 z-30 w-24 h-24 bg-emerald-500 text-white rounded-full flex flex-col items-center justify-center font-black shadow-lg border-4 border-white -rotate-12">
               <span className="text-[10px] leading-none uppercase">Off</span>
               <span className="text-2xl">50%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;