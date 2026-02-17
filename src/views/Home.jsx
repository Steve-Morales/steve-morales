// Assets
import Hololens from '../assets/MARVIN/HOLOLENS-2.png';
import ProfilePic from '../assets/profile_pic.jpg';
import GroupPic from '../assets/AutonomousVehiclesImages/group_picture_1.jpg';
import ZooKeeper from '../assets/ZooKeeper/zoo_keeper_app_demo.png';
import DelivAeroCardImg from '../assets/DelivAero/deliv_aero_front_page.png';
import Otto from '../assets/Otto/otto_demo.png';
import AutoJoberImg from '../assets/AutoJober/auto_jober_img.png';
import UnityImg from '../assets/Unity2DMovement/unity_2d_movement_img.png';
import MyCountryImg from '../assets/MyCountry/my_city.png';

// Components
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import IconLink from '../components/IconLink';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


export default function Home() {
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
        <div className="bg-gray-950 min-h-screen">
            <Navbar />

            <section className="min-h-screen flex flex-col justify-center px-8 py-16">
                <div className='flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto'>
                    <div className='lg:w-5/12'>
                        <img src={ProfilePic} alt="Steve Morales" className='w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-blue-500/20' />
                    </div>

                    <div className='lg:w-7/12 space-y-6'>
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-2">Steve Morales</h1>
                            <h2 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-6">Software Engineer</h2>
                        </div>

                        <p className='text-xl text-gray-300 leading-relaxed'>
                            Front-End Developer at Tactical Engineering and Analysis with expertise in C++, Python, and JavaScript.
                            Specialized in performance optimization, test automation, and building robust software solutions.
                            CompTIA Security+ certified with a strong focus on quality engineering and system reliability.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-6'>
                            <div className='bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300'>
                                <h3 className='text-blue-400 font-bold text-lg mb-2'>Performance Optimization</h3>
                                <p className='text-gray-300'>Reduced I/O operations by 90% through efficient system design and profiling</p>
                            </div>
                            <div className='bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300'>
                                <h3 className='text-blue-400 font-bold text-lg mb-2'>Quality Engineering</h3>
                                <p className='text-gray-300'>Developed 100+ unit tests and standardized QA procedures across teams</p>
                            </div>
                            <div className='bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300'>
                                <h3 className='text-blue-400 font-bold text-lg mb-2'>Systems Programming</h3>
                                <p className='text-gray-300'>Expert in C++, Linux, Docker, and distributed system architecture</p>
                            </div>
                            <div className='bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300'>
                                <h3 className='text-blue-400 font-bold text-lg mb-2'>Security Certified</h3>
                                <p className='text-gray-300'>CompTIA Security+ certified with focus on secure software development</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-4 pt-4'>
                            <button
                                onClick={handleDownloadResume}
                                className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 cursor-pointer'
                            >
                                <FaDownload />
                                Download Resume
                            </button>
                            <a
                                href="#contact"
                                className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105'
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105'
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Skills />

            <section className="py-16 bg-gray-950">
                <div className='max-w-7xl mx-auto px-8'>
                    <h2 className='text-4xl font-extrabold text-white text-center mb-12'>Featured Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <Card
                            url="projects/marvin"
                            title="MA.R.V.I.N (Team Lead)"
                            image={Hololens}
                            description="Led development of an AR surgical assistant using HoloLens 2, creating an innovative solution to enhance surgical operations with augmented reality technology."
                        />
                        <Card
                            url="projects/autonomous-vehicles"
                            title="Autonomous Vehicles - Robotics"
                            image={GroupPic}
                            description="Built and programmed a self-driving scaled car using ROS and Docker, integrating camera and lidar sensors for autonomous navigation."
                        />
                        <Card
                            url="projects/auto-jober"
                            title="Auto Jober (Team Lead)"
                            image={AutoJoberImg}
                            description="Led a team of four to develop a desktop application that automates LinkedIn job applications, overcoming technical and team challenges to deliver a working solution."
                        />
                    </div>
                </div>
            </section>


            <section id="projects" className="py-16 bg-gray-900">
                <div className='max-w-7xl mx-auto px-8'>
                    <h2 className='text-4xl font-extrabold text-white text-center mb-4'>All Projects</h2>
                    <p className='text-gray-400 text-center mb-12 text-lg'>A comprehensive showcase of technical projects demonstrating versatility and expertise</p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card
                            url={"projects/my-country"}
                            title={"My Country"}
                            image={MyCountryImg}
                            description={"REST API integration project enabling users to search and explore data from 250+ countries with multiple search functionalities."}
                        />

                        <Card
                            url="projects/zoo-keeper"
                            title="Zoo Keeper (Team Lead)"
                            image={ZooKeeper}
                            description="Led development of an Android app replicating San Diego Zoo's functionality, implementing graphs, databases, and design patterns."
                        />

                        <Card
                            url="projects/delivAero"
                            title="delivAero"
                            image={DelivAeroCardImg}
                            description="Built a responsive static website using Vue.js to showcase an organization, establishing foundation in modern web development."
                        />

                        <Card
                            url="projects/otto"
                            title="Otto"
                            image={Otto}
                            description="Developed a Python automation tool with GUI for Windows, automating mouse movements, clicks, screenshots, and keyboard events."
                        />

                        <Card
                            url="projects/unity-script"
                            title="Unity 2D Movement Script"
                            image={UnityImg}
                            description={"Created a free open-source Unity script for 2D platformer movement, including jumping, collision detection, and sprite animations."}
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className='py-20 bg-gradient-to-b from-gray-900 to-gray-950'>
                <div className='max-w-5xl mx-auto px-8'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-extrabold text-white mb-4'>Let's Connect</h2>
                        <p className='text-xl text-gray-300'>Open to new opportunities and collaborations</p>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16'>
                        <a
                            href="https://www.linkedin.com/in/steve--morales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='group'
                        >
                            <IconLink
                                icon_component={<FaLinkedin size={100} />}
                                url={"https://www.linkedin.com/in/steve--morales/"}
                                link_text={"LinkedIn"}
                                hover_text={"linkedin.com/in/steve--morales"}
                            />
                        </a>

                        <a
                            href="https://github.com/Steve-Morales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='group'
                        >
                            <IconLink
                                icon_component={<FaGithub size={100} />}
                                url={"https://github.com/Steve-Morales/"}
                                link_text={"GitHub"}
                                hover_text={"github.com/Steve-Morales"}
                            />
                        </a>

                        <div
                            onClick={(e) => { window.open('mailto:steve.morales22001@gmail.com?subject=SWE Opportunity'); }}
                            className='cursor-pointer group'
                        >
                            <IconLink
                                icon_component={<SiGmail size={100} />}
                                link_text={"Email"}
                                hover_text={"steve.morales22001@gmail.com"}
                            />
                        </div>
                    </div>

                    <div className='mt-16 text-center'>
                        <a
                            href="mailto:steve.morales22001@gmail.com?subject=SWE Opportunity"
                            className='inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-lg'
                        >
                            Reach Out About Opportunities
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}