import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
      {/* Product Image */}
      <figure className="relative h-64 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="badge bg-emerald-500 border-none text-white font-bold p-3 uppercase text-[10px]">
            {product.category}
          </span>
        </div>
      </figure>

      {/* Product Details */}
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title text-slate-800 font-bold group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h2>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-black text-slate-900">${product.price}</span>
          <div className="flex items-center gap-1">
             <span className="text-yellow-400 text-lg">★</span>
             <span className="text-sm font-bold text-gray-600">{product.rating}</span>
          </div>
        </div>

        <div className="card-actions mt-6">
         
          <Link 
            href={`/products/${product.id}`} 
            className="btn btn-primary btn-block bg-slate-900 hover:bg-emerald-600 border-none text-white rounded-xl transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}