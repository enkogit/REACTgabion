import React from 'react';

const Intro = () => {
    return (
        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" id='about'>
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between items-center lg:text-left gap-10" data-aos="fade-up">
                
                {/* Image Section - Made Larger */}
                <div className="lg:w-3/5 flex justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="200">
                    <img 
                        src="/images/gabion-garden.jpeg" 
                        alt="Beautiful gabion garden feature with decorative stone fill and native plants"
                        loading="lazy"
                        decoding="async"
                        className="rounded-3xl shadow-2xl w-full max-w-[680px] object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="lg:w-2/5 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="400">
                    <h3 className="text-3xl md:text-4xl text-[#1a3c34] font-bold leading-tight mb-6">
                        Built to Last.<br />Designed to Impress.
                    </h3>

                    <div className="space-y-5 text-lg text-gray-600">
                        <p>
                            Gabion baskets, panels, and fences are engineered for exceptional strength and longevity. 
                            Whether you're building a retaining wall, creating beautiful garden features, or controlling erosion, 
                            these products deliver both performance and visual appeal.
                        </p>
                        
                        <p>
                            Made with premium Galfan-coated steel and designed for Canadian weather conditions, 
                            gabions offer a perfect balance of durability, functionality, and modern aesthetics.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="text-[#1a3c34] text-2xl">✓</div>
                            <div className="text-sm font-medium">50+ Year Lifespan</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-[#1a3c34] text-2xl">✓</div>
                            <div className="text-sm font-medium">Low Maintenance</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-[#1a3c34] text-2xl">✓</div>
                            <div className="text-sm font-medium">Eco-Friendly Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;