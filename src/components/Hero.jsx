"use client";
import React from 'react';
import Link from "next/link"; 

const Hero = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Polarized Retro Sunglasses",
      price: 25.00,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1653038282660-266890e79e59?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Organic Cotton Beach Towel",
      price: 35.00,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 3,
      name: "Tropical Print Short Sleeve",
      price: 45.00,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Main Banner / Slider Section */}
      <section className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden bg-orange-100">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1747494749571-f09364eefb12?w=1200&auto=format&fit=crop&q=80')` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold uppercase tracking-wider text-sm mb-4 inline-block animate-bounce">
            Hot Deals 🔥
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            SUMMER SALE <span className="text-yellow-400">50% OFF</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium">
            Don't sweat the heat! Grab our premium summer essentials before they're gone.
          </p>
          <Link href="/products" className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-xl inline-block">
            Shop Collection
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default Hero;