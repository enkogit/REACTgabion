import React from 'react';

const Products = () => {
    return (
        <>
            <div className="my-4 py-4" id='products'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Top Selling Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Product 1 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <img src="/images/gabion-size-6.jpg" alt="Gabion Basket 100cm x 30cm x 50cm" className="w-full" />
                            <h4 className="font-semibold my-4 text-lg md:text-xl text-center">100cm x 30cm x 50cm</h4>
                            <p className="text-md font-medium">$150</p>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <img src="/images/gabion-size-7.jpg" alt="Gabion Basket 100cm x 50cm x 50cm" className="w-full" />
                            <h4 className="font-semibold my-4 text-lg md:text-xl text-center">100cm x 50cm x 50cm</h4>
                            <p className="text-md font-medium">$175</p>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <img src="/images/gabion-size-8.jpg" alt="Gabion Basket 100cm x 100cm x 50cm" className="w-full" />
                            <h4 className="font-semibold my-4 text-lg md:text-xl text-center">100cm x 100cm x 50cm</h4>
                            <p className="text-md font-medium">$220</p>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <img src="/images/gabion-size-300.jpg" alt="Gabion Basket 120cm x 90cm x 30cm" className="w-full" />
                            <h4 className="font-semibold my-4 text-lg md:text-xl text-center">120cm x 90cm x 30cm</h4>
                            <p className="text-md font-medium">$250</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
