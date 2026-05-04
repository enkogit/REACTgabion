import React, { useState } from 'react';
import { products } from '../data/products';
import QuoteModal from './QuoteModal';

const Calculator = () => {
  const [mode, setMode] = useState('baskets');
  const [length, setLength] = useState(8);
  const [height, setHeight] = useState(2);
  const [selectedBaskets, setSelectedBaskets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const availableProducts = products.filter(p => p.available);
  const GST_RATE = 0.05;

  // Dynamic Shipping Function (with $0 rule)
  const getShippingCost = (subtotal) => {
    if (subtotal === 0) return 0;
    return subtotal < 1000 ? 150 : 250;
  };

  // === Reference Basket for Wall Calculation ===
  const referenceBasket = products.find(p => p.id === 4);
  const basketFaceArea = 1.0 * 0.5;

  // === Wall Mode Calculations ===
  const wallArea = length * height;
  const estimatedBaskets = Math.ceil(wallArea / basketFaceArea);
  const wallSubtotal = estimatedBaskets * referenceBasket.price;
  const wallShipping = getShippingCost(wallSubtotal);
  const wallGST = wallSubtotal * GST_RATE;
  const wallTotal = wallSubtotal + wallShipping + wallGST;

  // === Basket Mode Calculations ===
  const basketSubtotal = selectedBaskets.reduce((sum, item) => {
    const prod = products.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);
  const basketShipping = getShippingCost(basketSubtotal);
  const basketGST = basketSubtotal * GST_RATE;
  const basketTotal = basketSubtotal + basketShipping + basketGST;

  const addBasket = (product) => {
    const existing = selectedBaskets.find(item => item.id === product.id);
    if (existing) {
      setSelectedBaskets(selectedBaskets.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setSelectedBaskets([...selectedBaskets, { id: product.id, qty: 1 }]);
    }
  };

  const removeBasket = (id) => {
    setSelectedBaskets(selectedBaskets.filter(item => item.id !== id));
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return;
    setSelectedBaskets(selectedBaskets.map(item =>
      item.id === id ? { ...item, qty: newQty } : item
    ));
  };

  return (
      <section id="calculator" className="py-20 bg-[#f8f5f0]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#1a3c34] font-semibold">INSTANT ESTIMATOR</span>
          <h2 className="text-4xl font-bold mt-3">How Much Will Your Project Cost?</h2>
          <p className="mt-3 text-gray-600">Get a realistic estimate in seconds. No obligation.</p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow flex">
            <button 
              onClick={() => setMode('baskets')}
              className={`px-8 py-2 rounded-full font-medium transition ${mode === 'baskets' ? 'bg-[#1a3c34] text-white' : 'text-gray-600'}`}
            >
              Choose Baskets
            </button>
            <button 
              onClick={() => setMode('wall')}
              className={`px-8 py-2 rounded-full font-medium transition ${mode === 'wall' ? 'bg-[#1a3c34] text-white' : 'text-gray-600'}`}
            >
              By Wall Size
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {mode === 'baskets' ? (
            /* Basket Selection Mode */
            <div>
              <h3 className="font-semibold text-lg mb-6">Build Your Basket List</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="font-medium mb-4 text-sm uppercase tracking-widest">Available Products</div>
                  <div className="space-y-3 max-h-[420px] overflow-auto pr-2">
                    {availableProducts.map(product => (
                      <div key={product.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                        <div>
                          <div className="font-semibold">{product.name}</div>
                          <div className="text-sm text-gray-600">{product.size} • ${product.price}</div>
                        </div>
                        <button 
                          onClick={() => addBasket(product)}
                          className="bg-[#1a3c34] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-black transition"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-4 text-sm uppercase tracking-widest">Your Selection</div>
                  
                  {selectedBaskets.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-8 text-center text-gray-500">
                      Add products from the left to see your total
                    </div>
                  ) : (
                    <div className="space-y-3 mb-6">
                      {selectedBaskets.map(item => {
                        const prod = products.find(p => p.id === item.id);
                        return (
                          <div key={item.id} className="flex items-center justify-between bg-white border p-4 rounded-xl">
                            <div>
                              <div className="font-medium">{prod?.name}</div>
                              <div className="text-sm text-gray-600">${prod?.price} × {item.qty}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 border rounded-full">-</button>
                              <span className="w-6 text-center font-mono">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 border rounded-full">+</button>
                              <button onClick={() => removeBasket(item.id)} className="text-red-500 ml-2">×</button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Basket Mode Summary */}
                  <div className="bg-[#1a3c34] text-white rounded-2xl p-6">
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${basketSubtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>${basketShipping}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (5%)</span>
                        <span>${basketGST.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-white/30 pt-3 mt-2 flex justify-between text-2xl font-bold">
                        <span>Total</span>
                        <span>${basketTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setModalOpen(true)}
                      disabled={selectedBaskets.length === 0}
                      className="mt-6 w-full bg-white text-[#1a3c34] hover:bg-gray-100 disabled:bg-gray-300 font-bold py-4 rounded-2xl transition"
                    >
                      Get Quote for This Selection →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Wall Mode */
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-lg mb-6">Enter Your Wall Dimensions</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block font-medium">Length</label>
                      <span className="text-2xl font-bold text-[#1a3c34]">{length}m</span>
                    </div>
                    <input type="range" min="2" max="30" step="0.5" value={length} onChange={e => setLength(parseFloat(e.target.value))} className="w-full accent-[#1a3c34]" />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>2m</span>
                      <span>30m</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block font-medium">Height</label>
                      <span className="text-2xl font-bold text-[#1a3c34]">{height}m</span>
                    </div>
                    <input type="range" min="0.5" max="3.5" step="0.25" value={height} onChange={e => setHeight(parseFloat(e.target.value))} className="w-full accent-[#1a3c34]" />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>0.5m</span>
                      <span>3.5m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wall Mode Results */}
              <div className="bg-[#1a3c34] text-white rounded-2xl p-8 flex flex-col">
                <div className="flex-1">
                  <div className="uppercase tracking-widest text-sm opacity-70">ESTIMATED COST</div>
                  
                  <div className="mt-6 space-y-2 text-lg">
                    <div className="flex justify-between">
                      <span>Subtotal ({estimatedBaskets} × {referenceBasket.size})</span>
                      <span>${wallSubtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${wallShipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%)</span>
                      <span>${wallGST.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/30 pt-3 mt-2 flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>${wallTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-sm opacity-80">
                    Based on {estimatedBaskets} × {referenceBasket.name}.<br />
                    Final price depends on exact model and quantity.
                  </div>
                </div>

                <button 
                  onClick={() => setModalOpen(true)}
                  className="mt-8 w-full bg-white text-[#1a3c34] hover:bg-gray-100 font-bold py-4 rounded-2xl transition"
                >
                  Get Exact Quote for This Project →
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Shipping: $150 if under $1000, $250 if $1000+. Final quote may vary based on exact products and location.
        </p>
      </div>

      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        prefilledProduct={mode === 'wall' ? `Wall ${length}m × ${height}m` : 'Custom Basket Selection'} 
      />
    </section>
  );
};

export default Calculator;