"use client";

import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#101827] text-white py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tight">
                        DinnerMatch
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#how-it-works" className="text-sm font-medium hover:opacity-80 transition-opacity">How It Works</a>
                        <a href="#about-us" className="text-sm font-medium hover:opacity-80 transition-opacity">About Us</a>
                        <a href="#faq" className="text-sm font-medium hover:opacity-80 transition-opacity">FAQ</a>
                    </div>

                    <button 
                        onClick={() => setIsLoginOpen(true)}
                        className="bg-white text-nav-bg px-5 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors"
                    >
                        Sign In
                    </button>
                </div>
            </nav>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
