import React from 'react';

const Services = () => {
    return (
        <div id="services" className="bg-[#f8f5f0] py-20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-[#1a3c34] font-semibold tracking-[3px] text-sm">WHAT WE OFFER</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#1a3c34]">Expert Gabion Solutions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        From professional consultation to premium products, we provide everything you need for a successful gabion project.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
                    
                    {/* Service 1: Consultation */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                        <div className="h-2 bg-[#1a3c34]"></div>
                        <div className="p-8 flex flex-col flex-1">
                            <div className="text-[#1a3c34] text-5xl mb-6">💬</div>
                            <h3 className="text-2xl font-bold text-[#1a3c34] mb-4">Gabion Consultation</h3>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                Get expert guidance from our team. We provide detailed site assessments, feasibility studies, 
                                and strategic recommendations to ensure your project succeeds from the start.
                            </p>
                            <div className="mt-6 pt-6 border-t">
                                <span className="text-sm font-semibold text-[#1a3c34]">Starting at $350</span>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Design */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                        <div className="h-2 bg-[#1a3c34]"></div>
                        <div className="p-8 flex flex-col flex-1">
                            <div className="text-[#1a3c34] text-5xl mb-6">📐</div>
                            <h3 className="text-2xl font-bold text-[#1a3c34] mb-4">Custom Gabion Design</h3>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                Our engineers create custom, site-specific designs for retaining walls, decorative features, 
                                and erosion control systems — blending technical precision with beautiful aesthetics.
                            </p>
                            <div className="mt-6 pt-6 border-t">
                                <span className="text-sm font-semibold text-[#1a3c34]">Starting at $750</span>
                            </div>
                        </div>
                    </div>

                    {/* Service 3: Products */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                        <div className="h-2 bg-[#1a3c34]"></div>
                        <div className="p-8 flex flex-col flex-1">
                            <div className="text-[#1a3c34] text-5xl mb-6">🧱</div>
                            <h3 className="text-2xl font-bold text-[#1a3c34] mb-4">Premium Gabion Products</h3>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                High-quality Galfan-coated gabion baskets, panels, and accessories. 
                                Built for Canadian conditions with 50+ year lifespan and low maintenance.
                            </p>
                            <div className="mt-6 pt-6 border-t">
                                <span className="text-sm font-semibold text-[#1a3c34]">Fast Canada-wide delivery</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                    <p className="text-gray-600 mb-4">Not sure which service is right for you?</p>
                    <button 
                        onClick={() => {
                            const element = document.getElementById('calculator');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#1a3c34] hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl text-lg transition"
                    >
                        Get a Free Project Consultation
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Services;