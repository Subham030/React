import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/react.svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="YarrowTech Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold tracking-wide">YarrowTech</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/login"
            className="ml-4 bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-white px-4 py-2 rounded-lg shadow"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-200 hover:text-white py-2 border-b border-gray-700"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/login"
            className="mt-4 block text-center bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg shadow"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
