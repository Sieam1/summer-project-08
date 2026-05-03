"use client"; 

import React from 'react';
import products from "@/data/products.json";
import { useRouter } from "next/navigation"; 

export default function ProductDetails({ params }) {
  const router = useRouter(); 
  const { id } = React.use(params); 

  const product = products.find(
    (p) => String(p.id).trim() === String(id).trim()
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h1 className="text-6xl font-black text-orange-500">404</h1>
        <p className="text-xl font-bold mt-4">Product Not Found</p>
        <button 
          onClick={() => router.back()} 
          className="btn bg-slate-900 text-white rounded-full px-8 mt-6 border-none"
        >
          Back to Store
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] bg-slate-50 py-6 md:py-10" data-theme="light">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Navigation - Top Bar style */}
        <div className="flex items-center mb-4">
           <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-slate-500 hover:text-orange-600 font-bold text-sm transition-all bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"
           >
             <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Store
           </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-slate-100">
          
          {/* Product Image - Reduced Size */}
          <div className="relative p-6 bg-slate-50 flex items-center justify-center">
            <div className="relative w-full aspect-square max-h-[350px] md:max-h-[400px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                />
            </div>
            {/* Minimalist Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-white shadow-sm">
               NEW SEASON
            </div>
          </div>

          {/* Product Info - More Compact */}
          <div className="p-6 md:p-10 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-tighter">
                    {product.brand || "Premium"}
                </span>
                <div className="flex items-center text-yellow-400 text-xs">
                    ★ <span className="text-slate-900 ml-1 font-bold">{product.rating}</span>
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight uppercase tracking-tighter">
                {product.name}
            </h1>
            
            <p className="text-3xl font-black text-orange-600 mb-4 tracking-tight">
                ${product.price}
            </p>
            
            <p className="text-slate-500 mb-6 leading-relaxed text-sm md:text-base font-medium line-clamp-4 md:line-clamp-none">
              {product.description}
            </p>

            <div className="flex items-center gap-3 mb-6">
                <button className="flex-[3] bg-slate-900 text-white font-bold h-12 md:h-14 rounded-2xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-slate-900/10 uppercase text-xs tracking-widest">
                    Add to Cart
                </button>
                <button className="flex-1 border border-slate-200 h-12 md:h-14 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center text-xl active:scale-90">
                    ❤
                </button>
            </div>
            
            <div className="pt-5 border-t border-slate-50 grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Category</span>
                    <span className="text-xs font-bold text-slate-800">{product.category}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Availability</span>
                    <span className={`text-xs font-bold ${product.stock > 0 ? "text-emerald-600" : "text-red-600"}`}>
                        {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}