"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className="bg-[#101827] text-white py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-bold ">
                        <Link href="/" className="text-white hover:opacity-90">DinnerMatch</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#how-it-works" className="text-base text-[#F5F5F5] hover:opacity-80 transition-opacity">How It Works</Link>
                        <Link href="/#about-us" className="text-base text-[#F5F5F5]  hover:opacity-80 transition-opacity">About Us</Link>
                        <Link href="/#faq" className="text-base text-[#F5F5F5]  hover:opacity-80 transition-opacity">FAQ's</Link>
                    </div>

                    <div className="hidden md:block">
                        {isAuthenticated ? (
                            <Link
                                href="/account"
                                className="bg-white text-[#212121] px-5 py-2 uppercase rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
                            >
                                My Account
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-white text-[#212121] px-5 py-2 uppercase rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden flex items-center gap-4'>
                        <div>
                            <Link
                                href="/login"
                                className="block w-full text-center bg-white text-[#212121] px-5 py-3 uppercase rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#101827] border-t border-gray-800 absolute w-full left-0 py-6 px-4 flex flex-col gap-6 shadow-xl mt-3">
                        <Link
                            href="/#how-it-works"
                            className="text-lg text-[#F5F5F5] hover:text-[#FFAA55] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/#about-us"
                            className="text-lg text-[#F5F5F5] hover:text-[#FFAA55] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#faq"
                            className="text-lg text-[#F5F5F5] hover:text-[#FFAA55] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ's
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;


