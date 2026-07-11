import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <p>&copy; 2023 Steve A. Morales</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-900 hover:bg-gray-300 bg-opacity-50 transition-all duration-300 rounded-full px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-900 hover:bg-gray-300 bg-opacity-50 transition-all duration-300 rounded-full px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
