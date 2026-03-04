import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Technology', 'Commerce', 'Science', 'Arts'];

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

            {/* Page Header */}
            <div className="bg-inst-navy text-white py-16 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-inst-orange opacity-10 transform skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">Academic Programs</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Discover a wide range of undergraduate and postgraduate courses designed to foster intellectual growth and professional success.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filters and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-md shadow-sm border border-inst-light-border">

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-md font-medium text-sm transition-all duration-300 uppercase tracking-wide
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
                            className="block w-full pl-10 pr-3 py-3 border border-inst-light-border rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-inst-blue focus:border-inst-blue sm:text-sm transition-colors"
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
                                    className="card-hover group flex flex-col h-full border border-inst-light-border rounded-md overflow-hidden bg-white shadow-sm"
                                >
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                        <div className="absolute top-4 left-4 bg-inst-orange text-inst-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                            {course.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold font-serif text-inst-primary mb-3 line-clamp-2">{course.title}</h3>
                                        <p className="text-inst-dark-gray mb-6 flex-grow text-sm leading-relaxed">{course.description}</p>

                                        <div className="flex items-center justify-between text-sm text-inst-med-gray border-t border-inst-light-border pt-4 mb-6">
                                            <div className="flex items-center">
                                                <Clock size={16} className="mr-2 text-inst-blue" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Award size={16} className="mr-2 text-inst-yellow" />
                                                <span>{course.seats} Seats</span>
                                            </div>
                                        </div>

                                        <Link to="/admission" className="w-full text-center py-3 border-2 border-inst-primary text-inst-primary font-bold uppercase tracking-wider text-sm rounded hover:bg-inst-primary hover:text-white transition-colors duration-300">
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
                            className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 mb-2">No programs found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                            <button
                                onClick={() => { setFilter('All'); setSearchQuery(''); }}
                                className="mt-6 text-ecog-navy hover:text-ecog-gold font-medium transition-colors"
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
