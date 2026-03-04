import React, { useState } from 'react';
import {
    Users, BookOpen, Bell, Settings, LogOut,
    Menu, Search, PlusCircle, MoreVertical, ShieldCheck, FileText, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarItem = ({ icon, text, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${active ? 'bg-ecog-navy text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
    >
        {icon}
        <span className="font-medium text-sm">{text}</span>
    </button>
);

const DashboardCard = ({ title, value, icon, trend, colorClass }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <div className="text-3xl font-bold font-serif text-ecog-navy">{value}</div>
            <div className="text-xs text-green-500 font-medium mt-2 flex items-center">
                <span className="bg-green-100 px-2 py-0.5 rounded mr-2">{trend}%</span> vs last month
            </div>
        </div>
        <div className={`p-4 rounded-full ${colorClass}`}>
            {icon}
        </div>
    </div>
);

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const mockAdmissions = [
        { id: "APP-001", name: "Sarah Jenkins", course: "Computer Science", date: "Oct 15", status: "Pending" },
        { id: "APP-002", name: "Michael Chen", course: "Business Administration", date: "Oct 14", status: "Approved" },
        { id: "APP-003", name: "Emily Davis", course: "Biomedical Sciences", date: "Oct 12", status: "Under Review" },
        { id: "APP-004", name: "James Wilson", course: "Computer Science", date: "Oct 10", status: "Approved" },
        { id: "APP-005", name: "Sophia Martinez", course: "Arts & Design", date: "Oct 09", status: "Rejected" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Under Review': return 'bg-blue-100 text-blue-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className={`bg-white border-r border-gray-200 w-64 flex-shrink-0 flex flex-col transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full fixed z-20 h-full'}`}>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <ShieldCheck className="text-ecog-navy" size={24} />
                        <span className="font-serif font-bold text-xl text-ecog-navy">Admin<span className="text-ecog-gold">Panel</span></span>
                    </Link>
                    <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
                        <Menu size={20} className="text-gray-500" />
                    </button>
                </div>

                <div className="p-4 flex-grow overflow-y-auto">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 mt-2 px-2">Menu</div>
                    <SidebarItem icon={<Users size={20} />} text="Overview" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
                    <SidebarItem icon={<FileText size={20} />} text="Admissions" active={activeTab === 'Admissions'} onClick={() => setActiveTab('Admissions')} />
                    <SidebarItem icon={<BookOpen size={20} />} text="Courses" active={activeTab === 'Courses'} onClick={() => setActiveTab('Courses')} />
                    <SidebarItem icon={<Bell size={20} />} text="Notice Board" active={activeTab === 'Notices'} onClick={() => setActiveTab('Notices')} />

                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 mt-8 px-2">Settings</div>
                    <SidebarItem icon={<Settings size={20} />} text="Configuration" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
                </div>

                <div className="p-4 border-t border-gray-100">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 flex-shrink-0">
                    <div className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-ecog-navy" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu size={24} />
                        </button>
                        <h1 className="text-xl font-semibold text-ecog-navy">{activeTab}</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-ecog-navy outline-none text-sm transition-all w-64" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-ecog-gold text-white flex items-center justify-center font-bold text-sm">
                            AD
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="p-6 overflow-y-auto flex-grow">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={activeTab} // Retrigger animation on tab change
                    >
                        {activeTab === 'Overview' && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <DashboardCard title="Total Students" value="5,248" icon={<Users size={24} className="text-blue-500" />} trend="+12" colorClass="bg-blue-50" />
                                    <DashboardCard title="New Admissions" value="142" icon={<FileText size={24} className="text-green-500" />} trend="+18" colorClass="bg-green-50" />
                                    <DashboardCard title="Active Courses" value="54" icon={<BookOpen size={24} className="text-purple-500" />} trend="+2" colorClass="bg-purple-50" />
                                    <DashboardCard title="Active Notices" value="8" icon={<Bell size={24} className="text-yellow-600" />} trend="-5" colorClass="bg-yellow-50" />
                                </div>

                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                                        <h2 className="text-lg font-semibold text-ecog-navy">Recent Admission Applications</h2>
                                        <button className="text-sm font-medium text-ecog-gold hover:text-yellow-600">View All</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                                                    <th className="px-6 py-4 font-medium">Application ID</th>
                                                    <th className="px-6 py-4 font-medium">Applicant Name</th>
                                                    <th className="px-6 py-4 font-medium">Course Applied For</th>
                                                    <th className="px-6 py-4 font-medium">Date Applied</th>
                                                    <th className="px-6 py-4 font-medium">Status</th>
                                                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {mockAdmissions.map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-medium text-ecog-navy">{item.id}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{item.course}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <button className="p-1 hover:bg-gray-200 rounded text-gray-400 transition-colors"><MoreVertical size={16} /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab !== 'Overview' && (
                            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                    <settings size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-ecog-navy mb-2">{activeTab} Management</h2>
                                <p className="text-gray-500 max-w-md mx-auto mb-6">
                                    This module is currently under development. Mock interface components are set up for future integration.
                                </p>
                                <button className="btn-primary inline-flex items-center">
                                    <PlusCircle size={18} className="mr-2" />
                                    Add New {activeTab === 'Notices' ? 'Notice' : activeTab.slice(0, -1)}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>

        </div>
    );
};

export default Dashboard;
