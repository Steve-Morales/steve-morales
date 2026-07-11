import Navbar from "../components/Navbar";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center container mx-auto px-4 py-8 h-[calc(100vh-64px)]">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-blue-500 text-xl" />
                            <a href="mailto:steve.morales22001@gmail.com" className="text-lg">
                                steve.morales22001@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhone className="text-blue-500 text-xl" />
                            <span className="text-lg">+1 (323) 849-7222</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaLinkedin className="text-blue-500 text-xl" />
                            <a
                                href="https://www.linkedin.com/in/steve--morales/"
                                className="text-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                steve--morales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}