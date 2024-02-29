import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
// Remove the import for heroImg as it's no longer needed

const Hero = () => {
    return (
        <>
            <div className="hero" id="hero">
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                High-Quality Gabion Baskets, Panels, and Fences for Your Landscaping Needs
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                Gabionca offers durable and versatile gabion solutions for erosion control, retaining walls, and aesthetic landscaping.
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* Update the src attribute to point to the new image location */}
                            <img alt="Gabion Baskets and Solutions" className="rounded-t float-right duration-1000 w-full" src="/images/gabion-design.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
