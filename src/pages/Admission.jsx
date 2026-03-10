import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, ChevronRight, ArrowRight, BookOpen, Calculator, Globe, MapPin, ClipboardList, ChevronLeft } from 'lucide-react';

const Admission = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Start Your Journey",
            subtitle: "APPLY FOR 2024",
            description: "Begin your transformative educational experience with Ecog College. Applications are now open for the upcoming academic year.",
            image: "https://images.unsplash.com/photo-1523050335392-93851179ae2c?auto=format&fit=crop&q=80&w=1920",
            icon: <ClipboardList className="text-inst-yellow" size={32} />
        },
        {
            id: 2,
            title: "Financing Your Future",
            subtitle: "SCHOLARSHIPS & AID",
            description: "We offer a range of merit-based scholarships and financial aid programs to ensure that a world-class education is accessible to all.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920",
            icon: <Calculator className="text-inst-orange" size={32} />
        },
        {
            id: 3,
            title: "International Students",
            subtitle: "GLOBAL ADMISSIONS",
            description: "Join our diverse community of scholars from across the globe. We provide dedicated support for international applicants and student visas.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920",
            icon: <Globe className="text-inst-blue" size={32} />
        },
        {
            id: 4,
            title: "Campus Visits",
            subtitle: "EXPERIENCE THE VIBE",
            description: "Schedule a tour of our state-of-the-art facilities and meet with faculty and students to see if Ecog College is the right fit for you.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920",
            icon: <MapPin className="text-inst-yellow" size={32} />
        },
        {
            id: 5,
            title: "Application Roadmap",
            subtitle: "STEP-BY-STEP GUIDE",
            description: "From initial inquiry to final enrollment, our roadmap helps you navigate every stage of the admissions process with ease.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920",
            icon: <BookOpen className="text-inst-orange" size={32} />
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitted(false);

        if (!formData.name || !formData.email || !formData.program) {
            setError('Please fill in all required fields (Name, Email, Program).');
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                program: '',
                message: ''
            });
        } catch (err) {
            setError('There was an error submitting your application. Please try again.');
        }
    };

    const programs = [
        'Undergraduate Studies',
        'Graduate Studies',
        'Doctoral Programs',
        'Executive Education',
        'Online Courses'
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <div className="bg-inst-light-bg min-h-screen pb-20 pt-24">

            {/* Header / Slider */}
            <section className="relative h-[65vh] overflow-hidden bg-inst-navy mb-16">
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
                                className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-inst-navy via-inst-navy/40 to-transparent"></div>
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

                {/* Slider Navigation */}
                <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
                    <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-colors">
                        <ChevronRight size={20} />
                    </button>
                    <div className="flex gap-2 ml-2">
                        {slides.map((_, i) => (
                            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-inst-yellow' : 'w-2 bg-white/30'}`} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white shadow-xl rounded-sm overflow-hidden lg:flex lg:items-stretch border border-inst-light-border">
                    <div className="lg:w-1/2 p-10 sm:p-12 lg:p-16 bg-inst-primary text-white flex flex-col justify-center">
                        <motion.h2
                            className="text-3xl font-normal font-serif mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Why Choose Us?
                        </motion.h2>
                        <ul className="space-y-6">
                            {[
                                { title: "World-Class Faculty", desc: "Learn from leading experts and innovators in their fields." },
                                { title: "Cutting-Edge Research", desc: "Engage in groundbreaking research that shapes the future." },
                                { title: "Vibrant Campus Life", desc: "Experience a diverse and inclusive community." },
                                { title: "Career Opportunities", desc: "Strong alumni network and career support." }
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start bg-white/5 p-4 rounded-sm border border-white/5"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                                >
                                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-inst-yellow mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-lg tracking-wide">{item.title}</h3>
                                        <p className="text-gray-300 text-sm font-light mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <a href="#" className="inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-inst-yellow hover:text-white group transition-colors duration-300">
                                Learn more about our programs
                                <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 p-10 sm:p-12 lg:p-16">
                        <motion.h2
                            className="text-3xl font-bold text-gray-900 mb-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Application Form
                        </motion.h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                                <label htmlFor="name" className="block text-xs font-medium text-inst-dark-gray uppercase tracking-wider mb-2">
                                    Full Name <span className="text-inst-orange">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-inst-light-border bg-gray-50/50 rounded-sm focus:bg-white focus:ring-1 focus:ring-inst-primary focus:border-inst-primary transition-colors duration-300 sm:text-sm font-light outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                                <label htmlFor="email" className="block text-xs font-medium text-inst-dark-gray uppercase tracking-wider mb-2">
                                    Email Address <span className="text-inst-orange">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-inst-light-border bg-gray-50/50 rounded-sm focus:bg-white focus:ring-1 focus:ring-inst-primary focus:border-inst-primary transition-colors duration-300 sm:text-sm font-light outline-none"
                                    placeholder="john.doe@example.com"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                                <label htmlFor="phone" className="block text-xs font-medium text-inst-dark-gray uppercase tracking-wider mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-inst-light-border bg-gray-50/50 rounded-sm focus:bg-white focus:ring-1 focus:ring-inst-primary focus:border-inst-primary transition-colors duration-300 sm:text-sm font-light outline-none"
                                    placeholder="(123) 456-7890"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                                <label htmlFor="program" className="block text-xs font-medium text-inst-dark-gray uppercase tracking-wider mb-2">
                                    Desired Program <span className="text-inst-orange">*</span>
                                </label>
                                <select
                                    id="program"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    className="block w-full pl-3 pr-10 py-3 text-base border-inst-light-border bg-gray-50/50 rounded-sm focus:bg-white focus:ring-1 focus:ring-inst-primary focus:border-inst-primary transition-colors duration-300 sm:text-sm font-light outline-none border"
                                    required
                                >
                                    <option value="">Select a program</option>
                                    {programs.map((program) => (
                                        <option key={program} value={program}>
                                            {program}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full flex justify-center items-center px-6 py-4 rounded-sm text-xs font-medium text-white bg-inst-primary hover:bg-inst-navy transition-all duration-500 uppercase tracking-[0.15em] shadow-lg mt-8"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Application
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.button>

                            <AnimatePresence>
                                {error && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-4 p-3 flex items-center bg-red-100 border border-red-400 text-red-700 rounded-md">
                                        <Info className="h-5 w-5 mr-2" />
                                        {error}
                                    </motion.div>
                                )}
                                {submitted && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-4 p-3 flex items-center bg-green-100 border border-green-400 text-green-700 rounded-md">
                                        <CheckCircle className="h-5 w-5 mr-2" />
                                        Your application has been submitted successfully! We will contact you shortly.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;
