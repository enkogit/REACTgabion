import React from 'react';

const Intro = () => {
    return (
        <>
            <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" id='about'>
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center text-center">
                        <img alt="Gabion baskets" className="rounded-t float-right duration-500 w-full" src="/images/gabion-garden.jpeg" />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className="text-3xl text-blue-900 font-bold">Discover the Durability and Versatility of Our Gabion Baskets, Panels, and Fences</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Our gabion products are engineered for stability and designed to enhance the beauty of your outdoor space.</p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Whether you need solutions for erosion control, landscaping, or architectural features, we have the perfect gabion solution for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
