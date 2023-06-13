import React, { useState } from 'react';


function DropdownMenu({ onClose }) {
    return (
        <>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="relative h-32 w-32">
                <div className='absolute inset-x-0 top-0 h-16 w-screen'>
                    <ul className='bg-gray-100 px-4 py-4'>
                        <li><a href='/'>Home</a></li>
                        <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />

                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>

            </div>
        </>

    );
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Desktop */}
            <nav className="hidden sm:hidden md:flex bg-gray-100 h-16 flex-row justify-between items-center px-8">
                <span className="text-lg font-bold">Steve Morales</span>

                <ul className="flex w-fit">
                    <li><a href="/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-opacity-50 transition-all duration-300 rounded-full px-4 py-2">Home</a></li>
                    <li><a href="/contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-opacity-50 transition-all duration-300 rounded-full px-4 py-2">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile */}
            <nav className="sm:flex md:hidden bg-gray-100 h-16 flex flex-row justify-between items-center px-8">
                <span className="text-lg font-bold">Steve Morales</span>

                <div className="sm:block relative">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12h18M3 6h18M3 18h18"></path>
                        </svg>
                    </button>

                </div>

            </nav>
            {isMenuOpen && (
                <DropdownMenu onClose={() => setIsMenuOpen(false)} />
            )}


        </>
    );
}