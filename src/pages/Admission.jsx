import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, ChevronRight, ArrowRight } from 'lucide-react';

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitted(false);

        // Basic validation
        if (!formData.name || !formData.email || !formData.program) {
            setError('Please fill in all required fields (Name, Email, Program).');
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Admission form submitted:', formData);
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

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <div className="bg-inst-light-bg min-h-screen pb-20 pt-24">

            {/* Header */}
            <div className="bg-inst-navy text-white py-24 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-inst-primary/40 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-normal font-serif mb-6 text-white">Admissions</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Join our vibrant community of learners and take the first step towards a bright future.
                    </p>
                </div>
            </div>

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
                            <motion.li
                                className="flex items-start bg-white/5 p-4 rounded-sm border border-white/5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-inst-yellow mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-lg tracking-wide">World-Class Faculty</h3>
                                    <p className="text-gray-300 text-sm font-light mt-1 leading-relaxed">Learn from leading experts and innovators in their fields.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start bg-white/5 p-4 rounded-sm border border-white/5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-inst-yellow mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-lg tracking-wide">Cutting-Edge Research</h3>
                                    <p className="text-gray-300 text-sm font-light mt-1 leading-relaxed">Engage in groundbreaking research that shapes the future.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start bg-white/5 p-4 rounded-sm border border-white/5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-inst-yellow mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-lg tracking-wide">Vibrant Campus Life</h3>
                                    <p className="text-gray-300 text-sm font-light mt-1 leading-relaxed">Experience a diverse and inclusive community.</p>
                                </div>
                            </motion.li>
                            <motion.li
                                className="flex items-start bg-white/5 p-4 rounded-sm border border-white/5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-inst-yellow mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-lg tracking-wide">Career Opportunities</h3>
                                    <p className="text-gray-300 text-sm font-light mt-1 leading-relaxed">Strong alumni network and career support.</p>
                                </div>
                            </motion.li>
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
                            <motion.div variants={itemVariants}>
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

                            <motion.div variants={itemVariants}>
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

                            <motion.div variants={itemVariants}>
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

                            <motion.div variants={itemVariants}>
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

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-xs font-medium text-inst-dark-gray uppercase tracking-wider mb-2">
                                    Additional Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-inst-light-border bg-gray-50/50 rounded-sm focus:bg-white focus:ring-1 focus:ring-inst-primary focus:border-inst-primary transition-colors duration-300 sm:text-sm font-light outline-none"
                                    placeholder="Tell us more about your academic interests or any questions you may have."
                                ></textarea>
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
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-4 p-3 flex items-center bg-red-100 border border-red-400 text-red-700 rounded-md"
                                    >
                                        <Info className="h-5 w-5 mr-2" />
                                        {error}
                                    </motion.div>
                                )}
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-4 p-3 flex items-center bg-green-100 border border-green-400 text-green-700 rounded-md"
                                    >
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
