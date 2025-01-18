import React from "react";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">
              We are committed to delivering high-quality furniture for your
              home and office. Explore our wide range of products to find your
              perfect fit.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Service Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Stay Connected</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-customYellow px-4 py-2 rounded-r-md text-black font-semibold hover:bg-yellow-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2025 E-Com_World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
