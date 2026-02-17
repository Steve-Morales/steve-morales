import React from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCertificate, FaCode, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const experienceData = [
    {
        title: "Front-End Developer",
        company: "Tactical Engineering and Analysis",
        location: "San Diego, CA",
        period: "Mar 2025 – Present",
        highlights: [
            "Reduced read I/O operations by over 90% by implementing a FileObserver with inotify, verified via iostat",
            "Developed 100+ GoogleTest unit tests covering over 4 core modules",
            "Authored 2 widely adopted internal technical guides, reducing onboarding and testing setup time for a 6-engineer team",
            "Performed memory profiling with Valgrind and gdb to diagnose segmentation faults and memory leaks",
            "Configured UDP multicasting over N3N VPN across distributed AWS environments"
        ]
    },
    {
        title: "QA Software Engineer",
        company: "Programs Management Analytics & Technologies",
        location: "San Diego, CA",
        period: "Jul 2023 – Mar 2025",
        highlights: [
            "Authored and standardized C++ test procedures in collaboration with cross-functional teams",
            "Validated C++ code changes through GitLab CI pipelines, improving integration reliability",
            "Configured and customized Docker containers on Linux to create reproducible test environments",
            "Maintained and enhanced C++ build and test workflows on Ubuntu Linux"
        ]
    }
];

const educationData = [
    {
        degree: "M.S.E Software Engineering",
        school: "Arizona State University",
        location: "Tempe, AZ",
        period: "Aug 2025 – Present",
        gpa: "4.0/4.0",
        coursework: ["Software Verification & Validation Test"]
    },
    {
        degree: "B.S Computer Engineering",
        school: "University of California, San Diego",
        location: "La Jolla, CA",
        period: "Jun 2019 – Jun 2023",
        gpa: "3.0/4.0",
        coursework: ["Advanced Data Structures", "Design & Analysis of Algorithms", "Operating Systems", "Computer Architecture", "Software Engineering", "Computer Vision", "Autonomous Vehicles"]
    }
];

const projectsData = [
    {
        title: "M.A.R.V.I.N – Medical AR for Surgeons (HoloLens)",
        period: "Apr 2023 – Jun 2023",
        highlights: [
            "Led development of a medical AR platform using Microsoft HoloLens 2",
            "Integrated Unity with Mixed Reality Toolkit (MRTK) for interactive AR interface",
            "Converted DICOM-based CT/MRI scans into 3D organ models using TotalSegmentator",
            "Engineered desktop application using Electron, Node.js, and React",
            "Implemented video streaming pipeline using WebRTC"
        ]
    },
    {
        title: "Autonomous Lane Detection Robot (Jetson Nano)",
        period: "Jan 2023 – Mar 2023",
        highlights: [
            "Led software integration for autonomous vehicle project on Jetson Nano SBC",
            "Utilized ROS for modular robotics programming",
            "Engineered lane detection system using OpenCV and Canny edge filtering",
            "Tuned PID controllers for steering and speed control"
        ]
    }
];

export default function Resume() {
    const handleDownloadResume = async () => {
        try {
            const response = await fetch('/Steve_Morales_Resume_2026.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Steve_Morales_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading resume:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950">
            <Navbar />
            <div className="bg-gray-900 py-12">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="bg-gradient-to-br from-blue-900/20 to-gray-800/50 border border-blue-500/30 rounded-2xl p-8 mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">Steve A. Morales</h1>
                                <p className="text-gray-300 text-lg">Software Engineer | San Diego, CA</p>
                                <p className="text-gray-400">steve.morales22001@gmail.com | 323-849-7222</p>
                            </div>
                            <button
                                onClick={handleDownloadResume}
                                className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 cursor-pointer"
                            >
                                <FaDownload />
                                Download Resume
                            </button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FaBriefcase className="text-blue-400 text-2xl" />
                                <h2 className="text-3xl font-bold text-white">Experience</h2>
                            </div>
                            <div className="space-y-8">
                                {experienceData.map((job, index) => (
                                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                        <p className="text-blue-400 font-semibold">{job.company}</p>
                                        <p className="text-gray-400 text-sm mb-3">{job.location} | {job.period}</p>
                                        <ul className="space-y-2">
                                            {job.highlights.map((highlight, idx) => (
                                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                                    <span className="text-blue-400 mt-1">▸</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FaGraduationCap className="text-blue-400 text-2xl" />
                                <h2 className="text-3xl font-bold text-white">Education</h2>
                            </div>
                            <div className="space-y-6">
                                {educationData.map((edu, index) => (
                                    <div key={index} className="border-l-4 border-green-500 pl-6">
                                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                        <p className="text-green-400 font-semibold">{edu.school}</p>
                                        <p className="text-gray-400 text-sm">{edu.location} | {edu.period}</p>
                                        <p className="text-gray-300 font-semibold mt-1">GPA: {edu.gpa}</p>
                                        {edu.coursework.length > 0 && (
                                            <div className="mt-2">
                                                <p className="text-gray-400 text-sm">Key Coursework:</p>
                                                <p className="text-gray-300 text-sm">{edu.coursework.join(', ')}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FaCode className="text-blue-400 text-2xl" />
                                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                            </div>
                            <div className="space-y-6">
                                {projectsData.map((project, index) => (
                                    <div key={index} className="border-l-4 border-purple-500 pl-6">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-3">{project.period}</p>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                                    <span className="text-purple-400 mt-1">▸</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FaCertificate className="text-blue-400 text-2xl" />
                                <h2 className="text-3xl font-bold text-white">Certifications</h2>
                            </div>
                            <div className="relative overflow-hidden bg-gradient-to-br from-red-900/30 via-gray-800/50 to-gray-900/30 border-2 border-red-500/50 rounded-xl p-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>
                                <div className="relative flex items-center gap-6">
                                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/50">
                                        <FaShieldAlt className="text-white text-4xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">CompTIA Security+</h3>
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-400 text-sm">Issued: September 2025</span>
                                            <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-xs font-semibold">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
