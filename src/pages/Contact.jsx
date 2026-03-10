import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users, Briefcase, GraduationCap, Globe } from 'lucide-react';

const Contact = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Reach Out to Us",
            subtitle: "GET IN TOUCH",
            description: "Whether you have a quick question or need detailed information, our team is here to help you navigate your journey with Ecog College.",
            image: "https://images.unsplash.com/photo-1516387933901-8296255512d7?auto=format&fit=crop&q=80&w=1920",
            icon: <MessageCircle className="text-inst-yellow" size={32} />,
        },
        {
            id: 2,
            title: "Admissions Inquiry",
            subtitle: "PROSPECTIVE STUDENTS",
            description: "Ready to take the next step? Our admissions advisors are available to guide you through the application process and financial aid options.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920",
            icon: <GraduationCap className="text-inst-orange" size={32} />,
        },
        {
            id: 3,
            title: "Academic Collaboration",
            subtitle: "PARTNERSHIPS & RESEARCH",
            description: "We welcome opportunities for research collaborations and industry partnerships that drive innovation and community impact.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920",
            icon: <Users className="text-inst-blue" size={32} />,
        },
        {
            id: 4,
            title: "Join Our Faculty",
            subtitle: "CAREERS & OPPORTUNITIES",
            description: "Explore rewarding career opportunities at Ecog College. We are always looking for exceptional talent to join our academic and administrative teams.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
            icon: <Briefcase className="text-inst-yellow" size={32} />,
        },
        {
            id: 5,
            title: "Global Support Network",
            subtitle: "ALUMNI & OUTREACH",
            description: "Our dedicated support network spans the globe, ensuring that our community stays connected and supported, no matter where they are.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1920",
            icon: <Globe className="text-inst-blue" size={32} />,
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-inst-light-bg font-sans">
            {/* 1. Dynamic Contact Slider */}
            <section className="relative h-[70vh] overflow-hidden bg-inst-navy">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 z-0">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10 }}
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-inst-navy via-inst-navy/50 to-transparent"></div>
                        </div>

                        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                            >
                                {slides[currentSlide].icon}
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-inst-yellow font-medium uppercase tracking-[0.4em] text-xs mb-4"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-4xl md:text-6xl font-normal font-serif text-white mb-6"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed"
                            >
                                {slides[currentSlide].description}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-inst-yellow' : 'w-3 bg-white/30'}`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. Contact Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif text-inst-primary mb-8 underline decoration-inst-yellow decoration-2 underline-offset-8">Direct Contact</h2>
                            <p className="text-inst-med-gray font-light mb-10 leading-relaxed">
                                Our administrative offices are open Monday to Friday, 9:00 AM to 5:00 PM.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-3 rounded-sm bg-inst-light-bg text-inst-primary group-hover:bg-inst-primary group-hover:text-white transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-inst-med-gray mb-1">Call Us</h4>
                                        <p className="text-lg font-medium text-inst-navy">+91 94227 99927</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-3 rounded-sm bg-inst-light-bg text-inst-primary group-hover:bg-inst-primary group-hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-inst-med-gray mb-1">Email Us</h4>
                                        <p className="text-lg font-medium text-inst-navy">ecogproduct@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-3 rounded-sm bg-inst-light-bg text-inst-primary group-hover:bg-inst-primary group-hover:text-white transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-inst-med-gray mb-1">Visit Us</h4>
                                        <p className="text-base font-light text-inst-navy leading-relaxed">
                                            Near Kochai Varuval, Ezhil Nagar, Karatumedu, Saravanampatti, Coimbatore, TN 641107
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-inst-navy rounded-sm text-white relative overflow-hidden group">
                            <Clock className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 transform group-hover:rotate-12 transition-transform duration-700" />
                            <h3 className="text-xl font-serif mb-4 text-inst-yellow">Office Hours</h3>
                            <ul className="space-y-3 text-sm font-light text-gray-300">
                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>
                                <li className="flex justify-between"><span>Sunday</span> <span className="text-inst-orange">Closed</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-10 md:p-14 shadow-2xl border border-gray-100 rounded-sm">
                        <h2 className="text-3xl font-serif text-inst-primary mb-2">Send a Message</h2>
                        <p className="text-inst-med-gray font-light mb-10">Fill out the form below and our response team will get back to you within 24 hours.</p>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-inst-primary font-bold">Full Name</label>
                                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-inst-blue transition-colors font-light" placeholder="e.g. John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-inst-primary font-bold">Email Address</label>
                                    <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-inst-blue transition-colors font-light" placeholder="e.g. john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-inst-primary font-bold">Subject</label>
                                    <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-inst-blue transition-colors font-light bg-transparent">
                                        <option>Admissions</option>
                                        <option>General Inquiry</option>
                                        <option>Academic Support</option>
                                        <option>Careers</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-inst-primary font-bold">Phone Number</label>
                                    <input type="tel" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-inst-blue transition-colors font-light" placeholder="Optional" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-inst-primary font-bold">Your Message</label>
                                <textarea rows="4" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-inst-blue transition-colors font-light resize-none placeholder:text-gray-300" placeholder="How can we assist you today?"></textarea>
                            </div>

                            <button type="submit" className="btn-accent w-full py-5 flex items-center justify-center gap-3 group">
                                Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 3. Map Section */}
            <section className="h-[400px] w-full bg-inst-light-border relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={48} className="text-inst-orange mx-auto mb-4 animate-bounce" />
                        <h3 className="text-xl font-serif text-inst-primary italic">Find Us on the Map</h3>
                        <p className="text-sm font-light text-inst-med-gray mt-2">Coimbatore Campus, Saravanampatti</p>
                    </div>
                </div>
                {/* Embed Map would go here */}
                <div className="w-full h-full bg-slate-200 opacity-50 flex items-center justify-center italic text-slate-400">
                    [Interactive Map Environment]
                </div>
            </section>
        </div>
    );
};

export default Contact;
