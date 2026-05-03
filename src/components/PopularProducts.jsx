import products from '@/data/products.json'
import ProductCard from './ProductCard'

export default function PopularProducts() {
  return (
    <section id='curated-essentials' className='py-20 bg-slate-50 scroll-mt-20'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-14'>
          <div className='inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-100'>
            Must-Have Styles
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Curated Summer Essentials
          </h2>
          <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed'>
            Handpicked styles to keep you cool and confident under the sun.
            Experience premium quality in every stitch.
          </p>
        </div>

        {/* 12 Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
