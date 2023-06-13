// Assets
import ProfilePic from '../assets/profile_pic.jpg';
import GroupPic from '../assets/AutonomousVehiclesImages/group_picture_1.jpg';


// Components
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import IconLink from '../components/IconLink';
import Footer from '../components/Footer';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


export default function Home() {
    return (
        <>

            <section className="min-h-screen flex flex-col">
                <Navbar />

                <div className='hidden sm:flex flex-1 flex-row items-center justify-center'>
                    <img src={ProfilePic} alt="Profile" className='sm:w-4/12 lg:w-2/6 2xl:w-3/12 mx-4' />
                    <div className='p-4 sm:w-8/12 md:w-6/12 lg:w-3/6 2xl:w-5/12'>
                        <h1 className="p-2 font-extrabold underline">A Jack of All Trades</h1>
                        <p className='p-2 text-lg hover:font-medium hover:scale-110 transition-transform'>Highly skilled software engineer with in computer engineering</p>
                        <p className='p-2 text-lg hover:font-medium hover:scale-110 transition-transform'>Proficient in multiple programming languages and frameworks</p>
                        <p className='p-2 text-lg hover:font-medium hover:scale-110 transition-transform'>Expertise in building robust and scalable applications</p>
                        <p className='p-2 text-lg hover:font-medium hover:scale-110 transition-transform'>Commitment to writing clean and maintainable code</p>
                        <p className='p-2 text-lg hover:font-medium hover:scale-110 transition-transform'>Proven track record of successful project delivery</p>
                    </div>
                </div>


                <div className='sm:hidden flex flex-1 flex-col items-center justify-center'>
                    <img src={ProfilePic} alt="Profile" className='w-8/12' />
                    <div className='p-2 sm:hidden'>
                        <h1 className="font-bold">A Jack of All Trades</h1>
                        <p>Highly skilled software engineer with a strong background in computer science</p>
                        <p>Proficient in multiple programming languages and frameworks</p>
                        <p>Expertise in building robust and scalable applications</p>
                        <p>Commitment to writing clean and maintainable code</p>
                        <p>Proven track record of successful project delivery</p>
                    </div>
                </div>


            </section>


            <section className="p-4 md:h-screen flex items-center justify-center">
                <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 md:gap-16">
                    <Card
                        url="projects/autonomous-vehicles"
                        title="Autonomous Vehicles - Robotics"
                        image={GroupPic}
                        description="As a member of a team of 3, we built a scaled car that can drive autonomously.This was achieved using ROS and Docker to run software that works in tandem with hardware such as a camera and lidar.Additionally, using what we learned in 5 weeks, we presented a software project which can be used to improve autonomous driving such as Canny Filtering."
                    />

                    <Card
                        title="Card Title"
                        image="https://via.placeholder.com/300x200"
                        description="This is a sample card component."
                    />

                    <Card
                        title="Card Title"
                        image="https://via.placeholder.com/300x200"
                        description="This is a sample card component."
                    />

                    <Card
                        title="Card Title"
                        image="https://via.placeholder.com/300x200"
                        description="This is a sample card component."
                    />
                </div>
            </section>

            <section className='p-4 flex flex-col sm:flex-row items-center justify-evenly'>
                <div className='w-2/6'>
                <IconLink
                    icon_component={<FaLinkedin size={100} />}
                    url={"https://www.linkedin.com/in/steve--morales/"}
                    link_text={"LinkedIn"}
                    hover_text={"https://www.linkedin.com/in/steve--morales/"}
                />
                </div>


                <div className='w-2/6'>
                <IconLink
                    icon_component={<FaGithub size={100} />}
                    url={"https://github.com/Steve-Morales/"}
                    link_text={"GitHub"}
                    hover_text={"https://github.com/Steve-Morales/"}
                />
                </div>

                <div
                className='w-2/6' 
                onClick={(e) => { window.open('mailto:steve.morales22001@gmail.com?subject=SWE Opportunity'); }}>
                    <IconLink
                        icon_component={<SiGmail size={100} />}
                        link_text={"Email"}
                        hover_text={"steve.morales22001@gmail.com"}
                    />
                </div>

            </section>

            <Footer />
        </>
    );
}