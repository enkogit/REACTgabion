import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToCalculator = () => {
        let element = document.getElementById('calculator');
        
        if (!element) {
            element = document.querySelector('section.bg-\\[\\#f8f5f0\\]');
        }

        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="hero" id="hero">
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            
                            <div className="mb-4">
                                <span className="inline-block bg-[#1a3c34] text-white text-sm font-semibold px-4 py-1 rounded-full">
                                    Trusted Across Canada
                                </span>
                            </div>

                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-[#1a3c34] leading-tight">
                                High-Quality Gabion Baskets<br />for Your Landscaping Needs
                            </h1>

                            <div className="text-xl font-semibold tracking-tight mb-6 text-gray-600 max-w-lg">
                                Gabionca offers durable and versatile gabion solutions for erosion control, 
                                retaining walls, and aesthetic landscaping. Built for Canadian conditions.
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-8 text-sm text-gray-600">
                                <div>✓ Fast Canada-Wide Delivery</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                                <button 
                                    onClick={scrollToCalculator}
                                    className="bg-[#1a3c34] hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl text-lg transition shadow-lg"
                                >
                                    Get Fast Quotes
                                </button>
                                
                                <button 
                                    onClick={scrollToProducts}
                                    className="border-2 border-[#1a3c34] text-[#1a3c34] hover:bg-[#1a3c34] hover:text-white font-semibold px-8 py-4 rounded-2xl text-lg transition"
                                >
                                    Browse Products
                                </button>
                            </div>

                            <p className="text-sm text-gray-500">
                                No obligation • Reply within 24 hours
                            </p>
                        </div>

                        <div className="flex lg:justify-end w-full lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-up" data-aos-delay="700">
                            <img 
                                src="/images/gabion-design.jpeg" 
                                alt="Modern gabion retaining wall with integrated seating in a Calgary backyard"
                                loading="lazy"
                                decoding="async"
                                className="your-classes-here"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;