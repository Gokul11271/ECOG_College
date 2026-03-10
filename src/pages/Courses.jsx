import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Award, ArrowRight, BookOpen, Microscope, Zap, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "World-Class Education",
            subtitle: "ACADEMIC EXCELLENCE",
            description: "Dedicated to providing a rigorous and transformative learning experience that prepares students for global leadership.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920",
            icon: <BookOpen className="text-inst-yellow" size={32} />
        },
        {
            id: 2,
            title: "Innovative Research",
            subtitle: "PUSHING BOUNDARIES",
            description: "Our state-of-the-art laboratories and research facilities empower students to explore new frontiers in science and technology.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920",
            icon: <Microscope className="text-inst-orange" size={32} />
        },
        {
            id: 3,
            title: "Industry Integration",
            subtitle: "FUTURE READY",
            description: "Strong partnerships with industry leaders ensure our curriculum remains relevant and our graduates are highly sought after.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920",
            icon: <Zap className="text-inst-blue" size={32} />
        },
        {
            id: 4,
            title: "Creative Arts & Design",
            subtitle: "EXPRESSIVE MINDS",
            description: "Our expanding arts programs foster creativity, critical thinking, and a deep appreciation for cultural diversity.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1920",
            icon: <Palette className="text-inst-yellow" size={32} />
        },
        {
            id: 5,
            title: "Professional Development",
            subtitle: "CAREER ACCELERATION",
            description: "Our career services and certification programs provide the competitive edge needed to excel in today's global job market.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
            icon: <Award className="text-inst-orange" size={32} />
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const categories = ['All', 'Technology', 'Commerce', 'Science', 'Arts', 'Design'];

    const allCourses = [
        {
            id: 1,
            title: "Computer Science & Engineering",
            category: "Technology",
            duration: "4 Years",
            seats: 120,
            description: "Dive into the world of algorithms, AI, and software development with our cutting-edge curriculum.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "Business Administration",
            category: "Commerce",
            duration: "3 Years",
            seats: 80,
            description: "Shape the future of global business with our comprehensive management program.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "Biomedical Sciences",
            category: "Science",
            duration: "3 Years",
            seats: 60,
            description: "Explore the intersection of biology and medicine to solve complex health challenges.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "Information Technology",
            category: "Technology",
            duration: "4 Years",
            seats: 120,
            description: "Master modern IT infrastructure, cloud computing, and cybersecurity.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            title: "English Literature",
            category: "Arts",
            duration: "3 Years",
            seats: 50,
            description: "Analyze classic and contemporary literature while developing advanced critical thinking.",
            image: "https://images.unsplash.com/photo-1474932430478-367d26bb437f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            title: "Accounting & Finance",
            category: "Commerce",
            duration: "3 Years",
            seats: 100,
            description: "Build a strong foundation in financial principles, taxation, and corporate accounting.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            title: "Architecture & Design",
            category: "Design",
            duration: "5 Years",
            seats: 40,
            description: "Fusing aesthetic vision with structural integrity to shape the environments of the future.",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    const filteredCourses = allCourses.filter(course => {
        const matchesCategory = filter === 'All' || course.category === filter;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-inst-light-bg min-h-screen pt-24 pb-20">

            {/* Page Header / Slider */}
            <section className="relative h-[60vh] overflow-hidden bg-inst-navy mb-12">
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

                        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                    {slides[currentSlide].icon}
                                </div>
                                <span className="text-inst-yellow font-medium uppercase tracking-[0.4em] text-xs">
                                    {slides[currentSlide].subtitle}
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-6xl font-normal font-serif text-white mb-6 leading-tight max-w-3xl"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filters and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-sm shadow-sm border border-inst-light-border">

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-sm font-medium text-xs transition-all duration-300 uppercase tracking-widest
                  ${filter === cat
                                        ? 'bg-inst-primary text-white shadow-md'
                                        : 'bg-inst-light-bg text-inst-dark-gray hover:bg-inst-blue hover:text-white border border-inst-light-border'}
                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search programs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-inst-light-border rounded-sm leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-inst-blue focus:border-inst-blue sm:text-sm transition-colors font-light"
                        />
                    </div>
                </div>

                {/* Course Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredCourses.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredCourses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group flex flex-col h-full border border-inst-light-border rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
                                >
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                        />
                                        <div className="absolute top-4 left-4 bg-inst-orange/90 text-inst-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                                            {course.category}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-normal font-serif text-inst-primary mb-3 line-clamp-2">{course.title}</h3>
                                        <p className="text-inst-dark-gray mb-8 flex-grow text-sm leading-relaxed font-light">{course.description}</p>

                                        <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest text-inst-med-gray border-t border-inst-light-border pt-6 mb-8 font-medium">
                                            <div className="flex items-center gap-3">
                                                <Clock size={16} className="text-inst-blue" strokeWidth={1.5} />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Award size={16} className="text-inst-yellow" strokeWidth={1.5} />
                                                <span>{course.seats} Seats</span>
                                            </div>
                                        </div>

                                        <Link to="/admission" className="w-full text-center py-4 bg-inst-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm hover:bg-inst-blue transition-colors duration-500 shadow-sm">
                                            Apply Now
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 bg-white rounded-sm shadow-sm border border-gray-100"
                        >
                            <Search className="mx-auto h-12 w-12 text-gray-200 mb-6" />
                            <h3 className="text-2xl font-serif text-inst-navy mb-2">No programs found</h3>
                            <p className="text-inst-med-gray font-light mb-8">Try adjusting your search or filter criteria.</p>
                            <button
                                onClick={() => { setFilter('All'); setSearchQuery(''); }}
                                className="text-inst-blue hover:text-inst-orange font-medium uppercase tracking-widest text-xs transition-colors underline underline-offset-8"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Courses;
