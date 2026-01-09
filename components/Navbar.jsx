"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
    const { isAuthenticated } = useAuth();

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
            </nav>
        </>
    );
};

export default Navbar;
