import { useState } from 'react';
import { Link } from 'react-router-dom';

import animalKingdomLogo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full  fixed">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-[75px]">
                    <div className="flex items-center justify-between w-full">
                        <Link to="/" className="">
                            <img
                                className="h-[80px]"
                                src={animalKingdomLogo}
                                alt="Animal Kingdom"
                            />
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link to="/" className="text-black hover:bg-darkBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/about" className="text-black hover:bg-darkBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link to="/adopt" className="text-black hover:bg-darkBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Adopt</Link>
                            <Link to="/contact" className="text-black hover:bg-darkBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-800 hover:bg-gray-200 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="block text-black hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to="/about" className="block text-black hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link to="/adopt" className="block text-black hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">Adopt</Link>
                    <Link to="/contact" className="block text-black hover:text-blue-800 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
