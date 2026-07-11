import { Helmet } from 'react-helmet-async';
import Navbar from "../components/Navbar";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="bg-gray-950 min-h-screen">
            <Helmet>
                <title>Contact Steve Morales | Software Engineer</title>
                <meta name="description" content="Get in touch with Steve Morales, Software Engineer. Available for full-time roles, full-stack development, robotics, and AR/VR opportunities." />
                <link rel="canonical" href="https://stevemorales.dev/contact" />
            </Helmet>
            <Navbar />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-extrabold text-white mb-4">Let's Work Together</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            I'm actively seeking new opportunities in software engineering.
                            Whether you have a position, project, or just want to connect, I'd love to hear from you.
                        </p>
                        <a
                            href="mailto:steve.morales22001@gmail.com?subject=SWE Opportunity"
                            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                        >
                            Send Me an Email
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <a
                            href="mailto:steve.morales22001@gmail.com"
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <FaEnvelope className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">Email</h3>
                                    <p className="text-gray-400">Best way to reach me</p>
                                </div>
                            </div>
                            <p className="text-blue-300 text-lg font-medium">steve.morales22001@gmail.com</p>
                        </a>

                        <a
                            href="tel:+13238497222"
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <FaPhone className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">Phone</h3>
                                    <p className="text-gray-400">Available for calls</p>
                                </div>
                            </div>
                            <p className="text-blue-300 text-lg font-medium">+1 (323) 849-7222</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/steve--morales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <FaLinkedin className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                                    <p className="text-gray-400">Professional network</p>
                                </div>
                            </div>
                            <p className="text-blue-300 text-lg font-medium">linkedin.com/in/steve--morales</p>
                        </a>

                        <a
                            href="https://github.com/Steve-Morales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <FaGithub className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">GitHub</h3>
                                    <p className="text-gray-400">View my code</p>
                                </div>
                            </div>
                            <p className="text-blue-300 text-lg font-medium">github.com/Steve-Morales</p>
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/20 to-gray-800/20 p-8 rounded-xl border border-blue-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">What I'm Looking For</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-400 text-xl">✓</span>
                                <p>Full-time software engineering positions</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-400 text-xl">✓</span>
                                <p>Full-stack or backend development roles</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-400 text-xl">✓</span>
                                <p>Opportunities in robotics and AR/VR</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-400 text-xl">✓</span>
                                <p>Projects involving innovative technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}