import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Search } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Academics', path: '/courses' },
        { name: 'Admissions', path: '/admission' },
        { name: 'Notice Board', path: '/notices' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header className="w-full bg-white shadow-md z-50 sticky top-0">
            {/* Top Bar - Contact & Quick Links */}
            <div className="bg-inst-navy text-white text-xs py-2 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <span className="flex items-center"><Phone size={14} className="mr-2 text-inst-yellow" /> +91 94227 99927</span>
                    <span className="flex items-center"><Mail size={14} className="mr-2 text-inst-yellow" /> ecogproduct@gmail.com</span>
                    <span className="flex items-center"><MapPin size={14} className="mr-2 text-inst-yellow shrink-0" /> <span className="truncate max-w-[200px]" title="Near by Kochai Varuval, Ezhlil Nagar, Karatumedu, Saravanampatti, Coimbatore, Tamil Nadu 641107">Near by Kochai Varuval, Coimbatore</span></span>
                    <div className="flex space-x-4">
                        <Link to="/alumni" className="hover:text-inst-yellow transition-colors">Alumni</Link>
                        <span className="text-gray-500">|</span>
                        <Link to="/careers" className="hover:text-inst-yellow transition-colors">Careers</Link>
                        <span className="text-gray-500">|</span>
                        <Link to="/student-portal" className="text-inst-orange font-bold hover:text-white transition-colors">Student Portal</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo area */}
                    <Link to="/" className="flex items-center space-x-4 py-2">
                        <div className="w-14 h-14 bg-inst-primary rounded-sm flex items-center justify-center text-white border-b-4 border-inst-orange">
                            <GraduationCap size={36} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-3xl text-inst-primary leading-tight tracking-tight uppercase">Ecog</span>
                            <span className="text-sm font-bold text-inst-dark-gray tracking-widest uppercase">College</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-8 text-sm font-bold uppercase tracking-wide transition-colors border-b-4 
                  ${isActive(link.path)
                                        ? 'text-inst-primary border-inst-orange bg-gray-50'
                                        : 'text-inst-dark-gray border-transparent hover:text-inst-blue hover:border-inst-blue'
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pl-4 flex items-center space-x-4">
                            <button className="text-inst-primary hover:text-inst-orange transition-colors">
                                <Search size={20} />
                            </button>
                            <Link to="/admission" className="btn-accent">
                                Apply Now
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-inst-primary hover:text-inst-blue focus:outline-none p-2 bg-gray-100 rounded-md"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-inst-primary border-t-4 border-inst-orange shadow-inner">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-wider
                  ${isActive(link.path) ? 'bg-inst-blue text-white' : 'text-gray-300 hover:bg-inst-navy hover:text-white'}
                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-2 border-t border-inst-navy pb-2 flex flex-col space-y-3">
                            <Link
                                to="/admission"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-inst-orange text-inst-primary font-bold py-3 rounded-sm uppercase tracking-wider"
                            >
                                Apply Online
                            </Link>
                            <div className="flex flex-col items-center space-y-2 text-gray-400 text-sm mt-4">
                                <span className="flex items-center"><Phone size={14} className="mr-2" /> +91 94227 99927</span>
                                <span className="flex items-center"><Mail size={14} className="mr-2" /> ecogproduct@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
