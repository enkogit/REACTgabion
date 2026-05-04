import React, { useState } from 'react';
import { products } from '../data/products';
import QuoteModal from './QuoteModal';

const Products = () => {
  const [filter, setFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const openQuote = (productName) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#1a3c34] font-semibold tracking-[3px] text-sm">PREMIUM SELECTION</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Quality Gabion Products</h2>
          <p className="mt-4 max-w-md mx-auto text-gray-600">Built for Canadian conditions. Fast nationwide delivery.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', 'Baskets'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${filter === cat 
                ? 'bg-[#1a3c34] text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3 Cards Per Row Maximum */}
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${!product.available ? 'opacity-70' : ''}`}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {!product.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Currently Unavailable</span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-sm font-semibold shadow">
                    ${product.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-[#1a3c34] font-mono text-sm mb-3">{product.size}</p>
                  
                  <div className="text-sm text-gray-600 mb-6 flex-1">
                    {product.specs}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button 
                      onClick={() => openQuote(product.name)}
                      disabled={!product.available}
                      className="flex-1 bg-[#1a3c34] hover:bg-black disabled:bg-gray-400 text-white py-3.5 rounded-xl font-semibold transition"
                    >
                      {product.available ? 'Get Quote' : 'Notify Me'}
                    </button>
                    <button 
                      onClick={() => openQuote(product.name)}
                      disabled={!product.available}
                      className="flex-1 border border-[#1a3c34] text-[#1a3c34] hover:bg-[#1a3c34] hover:text-white disabled:border-gray-300 disabled:text-gray-400 py-3.5 rounded-xl font-semibold transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 text-gray-600">
          Need something custom? <span onClick={() => openQuote('Custom Project')} className="text-[#1a3c34] font-semibold underline cursor-pointer">Request a custom quote →</span>
        </div>
      </div>

      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        prefilledProduct={selectedProduct} 
      />
    </section>
  );
};

export default Products;