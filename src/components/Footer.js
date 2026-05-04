import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-[#1a3c34] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                
                <div className="grid md:grid-cols-12 gap-12">
                    
                    {/* Company Info */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-3xl">🧱</div>
                            <h3 className="font-bold text-3xl">GABIONCA</h3>
                        </div>
                        
                        <div className="text-white/80 text-lg mb-6 max-w-md">
                            Premium gabion solutions for Canadian landscapes. 
                            Built for durability, designed for beauty.
                        </div>

                        <div className="text-sm text-white/70">
                            <p>EcommpleX Inc.</p>
                            <p>Mountain View County, Alberta, Canada</p>
                            <p className="mt-2">www.gabion.ca</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-lg mb-6 tracking-widest">QUICK LINKS</h4>
                        <ul className="space-y-3 text-white/80">
                            <li>
                                <HashLink to="/#about" className="hover:text-white transition">About Us</HashLink>
                            </li>
                            <li>
                                <HashLink to="/#services" className="hover:text-white transition">Our Services</HashLink>
                            </li>
                            <li>
                                <HashLink to="/#products" className="hover:text-white transition">Our Products</HashLink>
                            </li>
                            <li>
                                <HashLink to="/#calculator" className="hover:text-white transition">Project Estimator</HashLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-lg mb-6 tracking-widest">GET IN TOUCH</h4>
                        
                        <div className="space-y-4 text-white/80 mb-8">
                            <a href="mailto:gabionca@pm.me" className="block hover:text-white transition">
                                gabionca@pm.me
                            </a>
                            <p>Fast response within 24 hours</p>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h5 className="font-semibold text-sm tracking-widest mb-4">FOLLOW US</h5>
                            <div className="flex gap-4">
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
                                >
                                    📷
                                </a>
                                <a 
                                    href="https://ca.pinterest.com/search/pins/?q=gabion%20design&rs=typed" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
                                >
                                    📌
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
                    <div>
                        © {new Date().getFullYear()} gabion.ca All rights reserved.
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        {/* <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a> */}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;