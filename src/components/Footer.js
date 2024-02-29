import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">GABIONCA</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>www.gabion.ca - EcommpleX Inc</h5>
                                <p>Calgary Alberta</p>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="/#about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/#offer" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Offer</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/#products" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Products</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Catalog</HashLink>
                        </li>                              
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Share your projects with us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                    <a href="https://instagram.com" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </li>
                                    <li className="ml-4">
                                    <a href="https://ca.pinterest.com/search/pins/?q=gabion%20design&rs=typed" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out" target="_blank" rel="noopener noreferrer">Pinterest</a>
                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Gabionca
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
