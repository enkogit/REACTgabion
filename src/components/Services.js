import React from 'react';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Offer</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    Explore our specialized gabion solutions with delivery options across Western Canada.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Gabion Consultation */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <h2 className="font-semibold my-4 text-2xl text-center">Gabion Consultation</h2>
                            <p className="text-md font-medium text-center">
                                Take the first step towards sturdy and stylish landscape solutions with our Gabion Consultation services. Our architects will guide you through site assessment, project feasibility, and design considerations to ensure the success of your gabion project.
                            </p>
                        </div>

                        {/* Gabion Design */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <h2 className="font-semibold my-4 text-2xl text-center">Gabion Design</h2>
                            <p className="text-md font-medium text-center">
                                Tailored to fit your space, our Gabion Design services provide custom solutions for your retaining walls, decorative features, and erosion control systems. We combine engineering with aesthetics to create functional designs that complement your environment.
                            </p>
                        </div>

                        {/* Gabion Baskets */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <h2 className="font-semibold my-4 text-2xl text-center">Gabion Baskets</h2>
                            <p className="text-md font-medium text-center">
                                Our Gabion Baskets are crafted from high-quality materials to provide durable and long-lasting support for your structures. Available in various sizes and specifications, they are the ideal choice for sustainable and eco-friendly construction.
                            </p>
                        </div>

                        {/* Gabion Rock Fill */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <h2 className="font-semibold my-4 text-2xl text-center">Gabion Rock Fill</h2>
                            <p className="text-md font-medium text-center">
                                Complete your gabion installation with our premium selection of Gabion Rock Fill materials. From river rock to granite, choose from an array of options that provide the perfect blend of stability and natural beauty to your gabion structures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
