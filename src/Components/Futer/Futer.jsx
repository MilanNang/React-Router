import React from 'react'

function Futer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and About */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-yellow-400">Lion World</h1>
            <p className="mt-2 text-gray-400">
              Celebrating the majesty of lions, their habitat, and the efforts to conserve these incredible creatures.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-semibold text-yellow-400">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="hover:text-yellow-300 transition">
                  About Lions
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-300 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#conservation" className="hover:text-yellow-300 transition">
                  Conservation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-lg font-semibold text-yellow-400">Follow Us</h2>
            <div className="flex justify-center md:justify-end mt-4 space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-yellow-300 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-yellow-300 transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-yellow-300 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-yellow-300 transition"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lion World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
  


export default Futer