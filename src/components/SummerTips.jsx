"use client";
import React from 'react';

export default function SummerTips() {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      desc: "Drink 3-4 liters of water daily to maintain energy levels and stay fresh.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
      badge: "Healthy Life"
    },
    {
      id: 2,
      title: "Skin Protection",
      desc: "Apply SPF 50+ sunscreen before stepping out to avoid harmful UV rays.",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=80",
      badge: "Skin Care"
    },
    {
      id: 3,
      title: "Fresh Fruits",
      desc: "Eat water-rich fruits like watermelon and pineapple to cool your body.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&auto=format&fit=crop&q=80",
      badge: "Nutrition"
    },
    {
      id: 4,
      title: "Proper Sleep",
      desc: "Get quality rest in a cool environment to recover from summer fatigue.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80",
      badge: "Self Care"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
             Summer <span className="text-emerald-500">Wellness</span> Tips
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
            Essential habits to stay vibrant and healthy during the sunny season.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="group relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                {/* Badge */}
                <div className="mb-4">
                  <span className="bg-emerald-500/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                    {tip.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                  {tip.desc}
                </p>

                {/* Bottom Line Decor */}
                <div className="mt-4 h-1 w-12 bg-emerald-400 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}