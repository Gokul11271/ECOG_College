import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Target, Eye, ChevronLeft, ChevronRight, History, Quote, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "A Legacy of Excellence",
            subtitle: "SINCE 1998",
            description: "For over 25 years, Ecog College has been a beacon of academic brilliance, nurturing thousands of minds to lead and innovate in a global landscape.",
            image: "https://images.unsplash.com/photo-1523050335392-93851179ae2c?auto=format&fit=crop&q=80&w=1920",
            icon: <History className="text-inst-yellow" size={32} />,
            color: "bg-inst-navy"
        },
        {
            id: 2,
            title: "Our Mission",
            subtitle: "EMPOWERING FUTURE LEADERS",
            description: "To provide a transformative educational experience that blends rigorous academic research with practical, real-world applications.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920",
            icon: <Target className="text-inst-orange" size={32} />,
            color: "bg-inst-primary"
        },
        {
            id: 3,
            title: "Our Vision",
            subtitle: "GLOBAL REACH, LOCAL IMPACT",
            description: "To become a world-class institution recognized for its contribution to society through excellence in education, innovation, and ethical leadership.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920",
            icon: <Eye className="text-inst-blue" size={32} />,
            color: "bg-inst-blue"
        },
        {
            id: 4,
            title: "Community Impact",
            subtitle: "BEYOND THE CAMPUS",
            description: "We are deeply committed to social responsibility, engaging in initiatives that uplift communities and promote sustainable development globally.",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1920",
            icon: <Globe className="text-inst-yellow" size={32} />,
            color: "bg-inst-navy"
        },
        {
            id: 5,
            title: "Technological Edge",
            subtitle: "INNOVATING THROUGH TECH",
            description: "Our campus is a hub for high-tech learning, equipped with the latest tools to ensure our students are masters of the digital age.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
            icon: <Zap className="text-inst-orange" size={32} />,
            color: "bg-inst-primary"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-inst-light-bg font-sans">
            {/* 1. Premium Slider Section */}
            <section className="relative h-[85vh] overflow-hidden bg-inst-navy">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10, ease: "linear" }}
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-inst-navy/70 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-inst-primary via-inst-primary/40 to-transparent"></div>
                        </div>

                        {/* Slide Content */}
                        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                            <div className="max-w-2xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        {slides[currentSlide].icon}
                                    </div>
                                    <span className="text-inst-yellow font-medium uppercase tracking-[0.3em] text-xs">
                                        {slides[currentSlide].subtitle}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-5xl md:text-7xl font-normal font-serif text-white mb-8 leading-tight"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-xl"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
                                    <Link to="/admission" className="btn-accent inline-flex items-center group">
                                        Join Our Legacy <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div className="ml-4 flex gap-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-8 bg-inst-yellow' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Philosophy & Core Values */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 border-2 border-inst-primary/10 rounded-sm transform translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                                alt="Modern Campus"
                                className="rounded-sm shadow-2xl relative z-10 aspect-[4/5] object-cover"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-inst-primary text-white p-12 rounded-sm shadow-2xl z-20 max-w-xs hidden md:block">
                                <Quote size={40} className="text-inst-yellow mb-6" />
                                <p className="text-lg italic font-light mb-4 leading-relaxed">
                                    "Education is not the learning of facts, but the training of the mind to think."
                                </p>
                                <span className="text-xs uppercase tracking-[0.2em] font-medium text-inst-yellow">— Albert Einstein</span>
                            </div>
                        </motion.div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[1px] bg-inst-orange"></div>
                                <h3 className="text-xs font-medium text-inst-orange uppercase tracking-[0.2em]">Our Philosophy</h3>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-normal font-serif text-inst-primary mb-10 leading-tight">
                                Cultivating a Culture of <br />
                                <span className="text-inst-blue italic">Inquiry and Innovation</span>
                            </h2>
                            <p className="text-lg text-inst-dark-gray mb-8 font-light leading-relaxed">
                                Since our inception, we have believed that education should transcend the classroom. Our pedagogical approach is designed to foster curiosity, critical thinking, and a lifelong passion for learning.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { title: "Academic Rigor", desc: "Pushing the boundaries of knowledge through intensive research and study." },
                                    { title: "Inclusive Community", desc: "Fostering an environment where every voice is heard and valued." },
                                    { title: "Global Citizenship", desc: "Preparing students to navigate and contribute to a complex, interconnected world." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        className="flex gap-6 group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-inst-light-bg flex items-center justify-center text-inst-primary group-hover:bg-inst-primary group-hover:text-white transition-colors duration-500">
                                            <Award size={24} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-inst-navy mb-2 tracking-wide uppercase text-sm">{item.title}</h4>
                                            <p className="text-inst-med-gray text-sm font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Section */}
            <section className="py-20 bg-inst-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Students Enrolled", value: "5000+" },
                            { label: "Expert Faculty", value: "250+" },
                            { label: "Global Partners", value: "45+" },
                            { label: "Alumni Network", value: "15k+" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-serif text-inst-yellow mb-2 font-light">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
