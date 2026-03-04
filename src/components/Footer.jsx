import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-inst-navy text-inst-light-bg py-16 relative overflow-hidden">
            {/* Accent Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-inst-primary via-inst-blue to-inst-orange"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-inst-primary rounded-sm flex items-center justify-center text-white border-b-2 border-inst-orange">
                                <span className="font-bold font-serif text-xl">E</span>
                            </div>
                            <div>
                                <span className="block font-serif font-bold text-2xl text-white leading-none">Ecog</span>
                                <span className="block text-xs font-bold text-inst-yellow tracking-widest uppercase">College</span>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed border-l-2 border-inst-blue pl-4">
                            Empowering students with world-class education and comprehensive development for a brighter future. Discover your potential in our esteemed institution.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-inst-primary flex items-center justify-center text-white hover:bg-inst-blue transition-colors"><Facebook size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-inst-primary flex items-center justify-center text-white hover:bg-inst-blue transition-colors"><Twitter size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-inst-primary flex items-center justify-center text-white hover:bg-inst-blue transition-colors"><Linkedin size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-inst-primary flex items-center justify-center text-white hover:bg-inst-blue transition-colors"><Instagram size={16} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-inst-yellow uppercase tracking-wider relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-inst-blue"></span>
                        </h4>
                        <ul className="space-y-3">
                            {['About Us', 'Academics', 'Admissions', 'Notice Board', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-inst-orange transition-colors text-sm flex items-center group">
                                        <ArrowRight size={14} className="mr-2 text-inst-blue group-hover:text-inst-orange transition-colors" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-inst-yellow uppercase tracking-wider relative inline-block">
                            Academics
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-inst-blue"></span>
                        </h4>
                        <ul className="space-y-3">
                            {['Faculty of Science', 'Faculty of Arts', 'Business & Commerce', 'Technology Studies', 'Library Resources'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-inst-orange transition-colors text-sm flex items-center group">
                                        <ArrowRight size={14} className="mr-2 text-inst-blue group-hover:text-inst-orange transition-colors" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-inst-yellow uppercase tracking-wider relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-inst-blue"></span>
                        </h4>
                        <ul className="space-y-5 bg-inst-primary/30 p-5 rounded-md border border-white/5">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-inst-orange flex-shrink-0 mt-1" />
                                <span className="text-gray-300 text-sm leading-relaxed">Near by Kochai Varuval, Ezhlil Nagar,<br />Karatumedu, Saravanampatti,<br />Coimbatore, Tamil Nadu 641107</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-inst-orange flex-shrink-0" />
                                <span className="text-gray-300 text-sm font-medium">+91 94227 99927</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-inst-orange flex-shrink-0" />
                                <span className="text-gray-300 text-sm">ecogproduct@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-inst-primary pt-8 flex flex-col md:flex-row justify-between items-center bg-inst-navy mt-12">
                    <p className="text-gray-400 text-sm md:mb-0 text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="text-inst-yellow font-bold">Ecog College</span>. All rights reserved. <br className="md:hidden" />
                        <span className="block md:inline md:ml-2 text-xs opacity-80">Developed by <span className="text-white font-medium">Ecog Core Technology</span></span>
                    </p>
                    <div className="flex flex-wrap justify-center mt-4 md:mt-0 space-x-4 md:space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
