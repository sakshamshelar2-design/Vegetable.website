import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onCartToggle, 
  searchTerm, 
  onSearchChange 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">GreenBasket</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-emerald-600 transition-colors">Shop</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search vegetables..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartToggle}
            className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search vegetables..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors">Home</a>
                <a href="#shop" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors">Shop</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 py-2 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;