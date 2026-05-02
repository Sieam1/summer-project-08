import products from "@/data/products.json";
import Link from "next/link";


export default async function ProductDetails({ params }) {
  
  
  const { id } = await params;

  
  const product = products.find(
    (p) => String(p.id).trim() === String(id).trim()
  );

 
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white" data-theme="light">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="text-xl font-semibold mt-4">Oops! Product Not Found</p>
        <p className="text-gray-500 mb-6">We couldn't find any product with ID: {id}</p>
        <Link href="/" className="btn btn-primary bg-slate-900 border-none rounded-full px-10">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12" data-theme="light">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <div className="mb-6">
           <Link href="/" className="text-orange-600 hover:underline font-medium">← Back to Store</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="p-8 bg-gray-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-md max-h-[400px] w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="badge badge-outline mb-2">{product.brand || "Summer Essential"}</div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
               <div className="rating rating-sm">
                  {[...Array(5)].map((_, i) => (
                    <input 
                      key={i} 
                      type="radio" 
                      className={`mask mask-star-2 ${i < Math.floor(product.rating) ? 'bg-yellow-400' : 'bg-gray-300'}`} 
                      disabled 
                    />
                  ))}
               </div>
               <span className="text-gray-600 font-bold">({product.rating})</span>
            </div>

            <p className="text-3xl font-black text-orange-600 mb-6">${product.price}</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary flex-1 bg-slate-900 border-none hover:bg-orange-600 h-14 rounded-xl text-white">
                Add to Cart
              </button>
              <button className="btn btn-outline h-14 rounded-xl border-gray-300 text-xl">
                ❤
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between text-sm">
                <span className="text-gray-500">Category: <b className="text-slate-700">{product.category}</b></span>
                <span className="text-gray-500">Stock: <b className={product.stock > 0 ? "text-green-600" : "text-red-600"}>{product.stock} pcs</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}