import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Building, ChevronRight, Globe, Award, PlayCircle, Star, Shield, Zap, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Excellence in Education",
            subtitle: "DISCOVER YOUR POTENTIAL",
            description: "A premier institution dedicated to fostering innovation, academic rigor, and global leadership in a rapidly evolving world.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            icon: <Star className="text-inst-yellow" size={32} />
        },
        {
            id: 2,
            title: "Research & Innovation",
            subtitle: "SHAPING THE FUTURE",
            description: "Empowering students and faculty to solve complex global challenges through cutting-edge research and interdisciplinary collaboration.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80",
            icon: <Zap className="text-inst-orange" size={32} />
        },
        {
            id: 3,
            title: "Global Community",
            subtitle: "CONNECTING THE WORLD",
            description: "Join a vibrant, diverse network of scholars and alumni across 50+ countries, united by a passion for creating positive impact.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
            icon: <Globe className="text-inst-blue" size={32} />
        },
        {
            id: 4,
            title: "Student Life",
            subtitle: "EXPERIENCE GROWTH",
            description: "Beyond academics, we offer a rich ecosystem of clubs, sports, and cultural activities to nurture every dimension of your character.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80",
            icon: <Users className="text-inst-yellow" size={32} />
        },
        {
            id: 5,
            title: "Alumni Success",
            subtitle: "LEGACY OF LEADERS",
            description: "Our graduates go on to lead major organizations and innovate in fields ranging from technology to the arts, world-wide.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
            icon: <Shield className="text-inst-orange" size={32} />
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const programs = [
        {
            title: "Engineering & Technology",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
            desc: "Innovative programs designed for the future of tech."
        },
        {
            title: "Business & Management",
            image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800",
            desc: "Developing leaders for the global economy."
        },
        {
            title: "Arts & Humanities",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
            desc: "Fostering creativity and critical thinking."
        },
        {
            title: "Architecture & Design",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
            desc: "Shaping the environments of the future."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-inst-light-bg font-sans">

            {/* 1. Stunning Hero Section with Slider */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-inst-navy">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <motion.img
                                initial={{ scale: 1.15 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10, ease: "linear" }}
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-inst-navy/80 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-inst-primary via-inst-primary/50 to-transparent"></div>
                        </div>

                        {/* Hero Content */}
                        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
                            <motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="flex justify-center mb-8"
                                >
                                    <div className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-inst-yellow/30 flex items-center justify-center">
                                        {slides[currentSlide].icon}
                                    </div>
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="inline-block py-1.5 px-4 rounded-sm border border-inst-yellow/30 text-inst-yellow font-medium uppercase tracking-[0.25em] text-xs md:text-xs mb-8 backdrop-blur-md bg-white/5"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 1 }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-normal font-serif text-white mb-6 leading-[1.15] tracking-tight"
                                >
                                    {slides[currentSlide].title.split(' ').map((word, i) => (
                                        i === 2 ? <span key={i} className="italic text-transparent bg-clip-text bg-gradient-to-r from-inst-yellow to-[#E8D399]"> <br />{word}</span> : word + ' '
                                    ))}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                    className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                                >
                                    <Link to="/admission" className="btn-accent">
                                        Apply Now
                                    </Link>
                                    <Link to="/courses" className="inline-flex items-center justify-center px-8 py-3 text-xs tracking-[0.15em] font-medium text-white border border-white/30 rounded-sm hover:bg-white hover:text-inst-primary transition-all duration-500 backdrop-blur-sm uppercase">
                                        Explore Programs
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="absolute bottom-12 right-12 z-30 flex items-center gap-6">
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                        className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-inst-yellow' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
                        <motion.div
                            className="w-full h-1/2 bg-inst-yellow"
                            animate={{ y: [0, 50, 0] }}
                            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* 2. Quick Highlights Strip (Overlapping Hero) */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 w-full">
                <div className="bg-white/95 backdrop-blur-xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-100">
                    {[
                        { icon: <Award className="text-inst-orange mb-4" size={28} strokeWidth={1.5} />, title: "Ranked #1", desc: "For Academic Excellence" },
                        { icon: <Globe className="text-inst-blue mb-4" size={28} strokeWidth={1.5} />, title: "Global Network", desc: "Alumni across 50+ countries" },
                        { icon: <Users className="text-inst-yellow mb-4" size={28} strokeWidth={1.5} />, title: "Expert Faculty", desc: "Learn from industry leaders" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex-1 p-10 md:p-12 text-center hover:bg-white transition-colors duration-500 group cursor-pointer">
                            <div className="flex justify-center transform group-hover:-translate-y-1 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-lg tracking-wide uppercase font-medium text-inst-navy mb-3">{item.title}</h3>
                            <p className="text-inst-med-gray text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. About / Institutional Legacy */}
            <section className="py-24 lg:py-32 bg-inst-light-bg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-50 transform skew-x-12 translate-x-32 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Image Grid */}
                        <motion.div
                            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                            className="relative"
                        >
                            <div className="absolute -inset-4 border-2 border-inst-orange/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <motion.img
                                variants={fadeInUp}
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
                                alt="Library"
                                className="rounded-sm shadow-2xl relative z-10 w-full h-[600px] object-cover"
                            />
                            <motion.div
                                variants={fadeInUp}
                                className="absolute -bottom-8 -right-8 bg-inst-primary p-10 rounded-sm shadow-2xl text-white max-w-[280px] hidden md:block z-20"
                            >
                                <div className="text-5xl font-light text-inst-yellow mb-3 font-serif">25+</div>
                                <div className="text-xs uppercase tracking-[0.2em] font-medium leading-relaxed">Years of Educational Legacy</div>
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="pl-0 lg:pl-10">
                            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[1px] bg-inst-orange"></div>
                                <h3 className="text-xs font-medium text-inst-orange uppercase tracking-[0.2em]">About Ecog College</h3>
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif text-inst-primary mb-10 leading-snug">
                                Shaping the <br />
                                <span className="text-inst-blue italic font-light">Minds of Tomorrow</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg text-inst-dark-gray mb-6 leading-relaxed font-light">
                                At Ecog College, we are committed to providing a transformative educational experience. Our interdisciplinary approach blends rigorous academics with real-world applications.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-lg text-inst-med-gray mb-12 leading-relaxed font-light">
                                We cultivate a vibrant, inclusive community where students are empowered to explore their passions, challenge conventions, and develop the skills necessary to lead in a rapidly changing world.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <Link to="/about" className="inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-inst-primary hover:text-inst-yellow transition-colors duration-300 group">
                                    <span className="pb-1 border-b border-inst-primary group-hover:border-inst-yellow transition-colors duration-300">
                                        Read Our Story
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. Programs Highlight */}
            <section className="py-24 bg-white border-t border-inst-light-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-1 bg-inst-blue"></div>
                                <h3 className="text-sm font-bold text-inst-blue uppercase tracking-[0.2em]">Academics</h3>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-inst-navy">Discover Our Programs</h2>
                        </div>
                        <Link to="/courses" className="btn-secondary hidden md:inline-flex shadow-sm">
                            View All Programs
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programs.map((prog, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                                className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer"
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-inst-navy via-inst-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <div className="w-8 h-[1px] bg-inst-yellow mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                                        <h3 className="text-2xl font-normal font-serif text-white mb-3">{prog.title}</h3>
                                        <p className="text-gray-300 text-sm mb-8 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 line-clamp-2">
                                            {prog.desc}
                                        </p>
                                        <span className="inline-flex items-center text-inst-yellow font-medium text-xs uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            Explore <ArrowRight size={14} className="ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center md:hidden">
                        <Link to="/courses" className="btn-secondary w-full justify-center">
                            View All Programs
                        </Link>
                    </div>

                </div>
            </section>

            {/* 5. Campus Video / CTA Section */}
            <section className="relative py-40 bg-inst-primary overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920"
                        alt="Campus Life"
                        className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <PlayCircle size={64} strokeWidth={1} className="mx-auto text-inst-yellow mb-10 cursor-pointer hover:scale-105 transition-transform duration-500 hover:text-white drop-shadow-md" />
                    <h2 className="text-4xl md:text-6xl font-normal font-serif text-white mb-8">Experience Campus Life</h2>
                    <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Take a virtual tour of our state-of-the-art facilities, modern classrooms, and vibrant student hubs.
                    </p>
                    <button className="bg-white text-inst-primary font-medium uppercase tracking-[0.15em] text-xs px-10 py-4 rounded-sm hover:bg-inst-light-bg transition-colors duration-500 shadow-xl">
                        Watch Video Tour
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;
