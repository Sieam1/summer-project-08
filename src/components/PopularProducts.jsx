import products from "@/data/products.json";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function PopularProducts() {
  
  const popular = products.slice(0, 8);

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
              🔥 Popular <span className="text-orange-500">Products</span>
            </h2>
            <div className="h-1.5 w-20 bg-orange-400 mt-2 rounded-full"></div>
          </div>
          
          <div className="hidden md:block h-[2px] flex-grow mx-8 bg-slate-200 opacity-50"></div>
          
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-all"
          >
            View All
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}