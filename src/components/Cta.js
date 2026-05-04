import React from 'react';

const Cta = () => {
    const openQuoteModal = () => {
        const event = new CustomEvent('openQuoteModal');
        window.dispatchEvent(event);
    };

    return (
        <div className="w-full relative flex items-center justify-center py-24 overflow-hidden">
            
            {/* Background Image with Proper Alt Text */}
            <img 
                src="/images/gabion-fence-wall.jpeg" 
                alt="Gabion fence wall installation showcasing clean modern design for residential property"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#1a3c34] bg-opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div data-aos="fade-up">
                    <span className="text-white text-sm font-semibold tracking-[3px]">LET'S WORK TOGETHER</span>
                    
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
                        Ready to Start<br />Your Gabion Project?
                    </h2>
                    
                    <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
                        Get expert guidance and a fast, no-obligation quote for your gabion needs. 
                        We're here to help you every step of the way.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={openQuoteModal}
                            className="bg-white hover:bg-gray-100 text-[#1a3c34] font-bold px-10 py-4 rounded-2xl text-lg transition shadow-xl"
                        >
                            Get Your Free Quote
                        </button>
                        
                        <a 
                            href="mailto:gabionca@pm.me"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#1a3c34] font-semibold px-10 py-4 rounded-2xl text-lg transition flex items-center justify-center"
                        >
                            Email Us Directly
                        </a>
                    </div>

                    <p className="mt-8 text-white/70 text-sm">
                        Email: <a href="mailto:gabionca@pm.me" className="underline hover:text-white">gabionca@pm.me</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cta;