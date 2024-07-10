import React, { useState, useEffect } from 'react';

export const Headders = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className={`transition-colors duration-300 ${isScrolled ? 'bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-100" src="../../img/Trescorp-logo.png" alt="Your Company" />
              </div>
              <div className="hidden md:flex ml-88 items-baseline space-x-4">
                <a href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`} aria-current="page">Home</a>
                <a href="/about-us" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`}>About Us</a>
                <a href="/team" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`}>Executive Team</a>
                <a href="/our-service" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`}>Our Services</a>
                <a href="/products" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`}>Products</a>
                <a href="/contact-us" className={`rounded-md px-3 py-2 text-sm font-medium ${isScrolled ? 'nav-text' : 'text-gray-300 hover:nav-text'}`}>Contact Us</a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:nav-text focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed inset-0 z-40 flex ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'bg-white' : 'bg-gray-800'}`}
      >
        <div className="w-64 h-full p-4" style={{backgroundColor:'white'}}>
          <div className="space-y-1 px-2 pb-3 pt-10 sm:px-3">
            <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium nav-text" aria-current="page">Home</a>
            <a href="/about-us" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:nav-text">About Us</a>
            <a href="/team" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:nav-text">Executive Team</a>
            <a href="/our-service" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:nav-text">Our Services</a>
            <a href="/products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:nav-text">Products</a>
            <a href="/contact-us" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:nav-text">Contact Us</a>
          </div>
        </div>
        <div className="flex-1" onClick={toggleMobileMenu}></div>
      </div>
    </div>
  );
};
