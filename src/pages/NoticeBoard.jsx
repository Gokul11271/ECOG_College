import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Bell, Download, ChevronDown, ChevronUp, Clock, Filter } from 'lucide-react';

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedNotice, setExpandedNotice] = useState(null);

  const tabs = ['All', 'Academic', 'Admissions', 'Events', 'General'];

  const notices = [
    {
      id: 1,
      title: "Fall Semester Admissions Open for 2024",
      category: "Admissions",
      date: "October 15, 2023",
      time: "10:00 AM",
      content: "Applications for the Fall 2024 semester are now open for all undergraduate and postgraduate programs. Early bird applicants will receive a waiver on the application fee. Please ensure all documents are submitted by the deadline.",
      attachment: "fall_admission_guidelines.pdf",
      important: true
    },
    {
      id: 2,
      title: "Annual Tech Symposium Registrations",
      category: "Events",
      date: "October 12, 2023",
      time: "02:30 PM",
      content: "Join us for the biggest tech event of the year! The Annual Tech Symposium will feature guest speakers from leading tech companies, coding competitions, and project showcases. Registration closes in two weeks.",
      important: false
    },
    {
      id: 3,
      title: "Revised Mid-term Examination Schedule",
      category: "Academic",
      date: "October 10, 2023",
      time: "09:00 AM",
      content: "Due to unforeseen circumstances, the mid-term examination schedule for the Science and Arts faculties has been slightly altered. Please review the updated timetable attached.",
      attachment: "revised_timetable_midterm.pdf",
      important: true
    },
    {
      id: 4,
      title: "Campus Network Maintenance Outage",
      category: "General",
      date: "October 05, 2023",
      time: "11:00 AM",
      content: "The campus IT department will be conducting scheduled maintenance on the main servers this weekend. Internet access and the student portal may be intermittently unavailable from Saturday 10 PM to Sunday 6 AM.",
      important: false
    },
    {
      id: 5,
      title: "Scholarship Applications for Returning Students",
      category: "Admissions",
      date: "October 01, 2023",
      time: "04:00 PM",
      content: "Merit-based and need-based scholarship applications are now open for currently enrolled students returning for their sophomore, junior, or senior years. Criteria and application forms are available at the financial aid office.",
      important: false
    }
  ];

  const filteredNotices = activeTab === 'All'
    ? notices
    : notices.filter(n => n.category === activeTab);

  const toggleNotice = (id) => {
    if (expandedNotice === id) {
      setExpandedNotice(null);
    } else {
      setExpandedNotice(id);
    }
  };

  return (
    <div className="bg-inst-light-bg min-h-screen pt-24 pb-20">

      {/* Header */}
      <div className="bg-inst-navy text-white py-24 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-inst-primary/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-normal font-serif mb-6">Notice Board</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Stay updated with the latest announcements, academic schedules, events, and important news from Ecog College.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation / Filters */}
        <div className="bg-white p-4 rounded-sm shadow-sm border border-inst-light-border mb-8 flex items-center overflow-x-auto scrollbar-hide">
          <Filter size={18} className="text-inst-med-gray mr-4 flex-shrink-0 hidden md:block" />
          <div className="flex space-x-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-sm font-medium text-xs transition-all duration-300 uppercase tracking-[0.1em]
                  ${activeTab === tab
                    ? 'bg-inst-primary text-white shadow-md'
                    : 'bg-gray-50 text-inst-dark-gray border border-inst-light-border hover:bg-inst-light-bg hover:text-inst-primary'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-md shadow-sm border border-inst-light-border overflow-hidden">
          <div className="divide-y divide-gray-100">
            <AnimatePresence>
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`transition-colors duration-300 ${expandedNotice === notice.id ? 'bg-blue-50/30' : 'hover:bg-gray-50'} `}
                  >
                    {/* Notice Header (Clickable) */}
                    <div
                      className="p-6 cursor-pointer flex items-start gap-4"
                      onClick={() => toggleNotice(notice.id)}
                    >
                      <div className="hidden sm:flex flex-col items-center justify-center bg-inst-light-bg rounded-md border border-gray-200 p-3 min-w-[80px]">
                        <span className="text-xs text-inst-med-gray font-bold uppercase">{notice.date.split(' ')[0].substring(0, 3)}</span>
                        <span className="text-2xl font-bold font-serif text-inst-primary leading-none my-1">{notice.date.split(' ')[1].replace(',', '')}</span>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-sm border
                            ${notice.category === 'Admissions' ? 'border-inst-primary/30 text-inst-primary bg-inst-primary/5' :
                              notice.category === 'Events' ? 'border-inst-yellow/50 text-inst-yellow bg-inst-yellow/10' :
                                notice.category === 'Academic' ? 'border-inst-blue/30 text-inst-blue bg-inst-blue/5' :
                                  'border-gray-200 text-inst-dark-gray bg-gray-50'
                            }
                          `}>
                            {notice.category}
                          </span>
                          {notice.important && (
                            <span className="flex items-center text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded-sm">
                              <Bell size={12} className="mr-1" /> Important
                            </span>
                          )}
                        </div>

                        <h3 className={`text-lg md:text-xl font-normal font-serif mb-2 pr-8 transition-colors duration-300 ${expandedNotice === notice.id ? 'text-inst-yellow' : 'text-inst-navy'} `}>
                          {notice.title}
                        </h3>

                        <div className="flex items-center text-xs text-inst-med-gray sm:hidden mb-2 font-light">
                          <Calendar size={14} className="mr-1" /> {notice.date}
                        </div>
                      </div>

                      <div className="mt-2 text-inst-med-gray transition-transform duration-300 transform">
                        {expandedNotice === notice.id ? <ChevronUp size={24} className="text-inst-yellow" /> : <ChevronDown size={24} />}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedNotice === notice.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-white border-t border-inst-light-border/50"
                        >
                          <div className="p-8 pt-6 sm:pl-28">
                            <div className="flex items-center text-[10px] text-inst-med-gray mb-4 font-medium uppercase tracking-[0.15em]">
                              <Clock size={14} className="mr-1 text-inst-yellow" /> Posted at {notice.time}
                            </div>
                            <p className="text-inst-dark-gray mb-8 leading-relaxed font-light pl-4 border-l-[3px] border-inst-yellow bg-gray-50/50 py-2">
                              {notice.content}
                            </p>

                            {notice.attachment && (
                              <button className="flex items-center py-2 px-4 bg-white border border-inst-light-border rounded text-sm text-inst-primary font-bold hover:bg-inst-primary hover:text-white transition-colors duration-300 group shadow-sm">
                                <Download size={16} className="mr-2 text-inst-blue group-hover:text-white transition-colors" />
                                {notice.attachment}
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="p-12 text-center text-inst-med-gray">
                  <Bell size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-lg">No notices found for this category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
