import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">GreenBasket</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted source for fresh, organic vegetables delivered straight from local farms to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-emerald-400 transition-colors">Shop</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Leafy Greens</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Root Vegetables</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Fresh Fruits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Herbs & Spices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Organic Selection</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@greenbasket.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                <span className="text-gray-300">
                  123 Fresh Market Street<br />
                  Green Valley, GV 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GreenBasket. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;