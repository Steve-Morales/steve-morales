import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; {currentYear} Steve A. Morales. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/resume" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Resume
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/linkedin-guide" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
                  LinkedIn Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
