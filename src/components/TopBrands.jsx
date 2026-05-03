"use client";
import React from 'react';

export default function TopBrands() {
  const brands = [
    {
      id: 1,
      name: "Nike",
      collection: "Premium Collection",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      badge: "Sportswear"
    },
    {
      id: 2,
      name: "Adidas",
      collection: "Premium Collection",
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&auto=format&fit=crop&q=80",
      badge: "Athletic"
    },
    {
      id: 3,
      name: "Puma",
      collection: "Premium Collection",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
      badge: "Lifestyle"
    },
    {
      id: 4,
      name: "SunShade",
      collection: "Premium Collection",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80",
      badge: "Accessories"
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            World-Class Partners
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-6">
             Top <span className="text-emerald-500">Brands</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Discover premium fashion brands and their exclusive summer collections 
            curated for ultimate style and comfort.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              
              {/* Intelligent Overlays */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                {/* Glassmorphism Badge */}
                <div className="mb-5 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-black tracking-widest px-4 py-1.5 rounded-full border border-white/30">
                    {brand.badge}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="text-4xl font-black mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {brand.name}
                </h3>

                {/* Collection Text - Slide Up Animation */}
                <div className="overflow-hidden">
                   <p className="text-sm text-gray-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700">
                     {brand.collection}
                   </p>
                </div>

                {/* Decorative Interactive Line */}
                <div className="mt-8 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-emerald-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}