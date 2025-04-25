import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Precision Autocare</h2>
          <p className="text-sm">
            Premium vehicle valeting and detailing services. Bringing that fresh showroom shine to your car—inside and out.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Linksz</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#booking" className="hover:text-white">Book Now</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><Phone size={16} /> 01234 567890</p>
            <p className="flex items-center gap-2"><Mail size={16} /> info@yourcompany.com</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p className="mt-1">
          Site by <a href="https://vectismedia.com" className="text-white underline hover:text-blue-400">Vectis Media</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
