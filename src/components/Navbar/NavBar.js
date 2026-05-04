import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 10);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${!top ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Logo */}
                    <HashLink smooth to="/" className="flex items-center gap-2">
                        <div className="text-[#1a3c34]">
                        </div>
                        <h1 className="font-extrabold text-3xl text-[#1a3c34] tracking-tight">GABIONCA</h1>
                    </HashLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLinks />
                        
                        <button 
                            onClick={() => {
                                const element = document.getElementById('calculator');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-[#1a3c34] hover:bg-black text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition"
                        >
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2 text-[#1a3c34]" 
                        onClick={handleClick}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6h12v12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 py-8 bg-white border-t space-y-4">
                    <NavLinks mobile={true} />
                    
                    <div className="pt-4 border-t">
                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                const element = document.getElementById('calculator');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full bg-[#1a3c34] hover:bg-black text-white font-semibold py-3 rounded-xl text-sm transition"
                        >
                            Get Instant Quote
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;