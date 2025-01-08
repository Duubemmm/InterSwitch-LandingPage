import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About Us', hasDropdown: true },
    { title: 'What We Do', hasDropdown: true },
    { title: 'Financial Inclusion', hasDropdown: false },
    { title: 'Corporate Responsibility', hasDropdown: false },
    { title: 'News & Insights', hasDropdown: false },
    { title: 'Contact', hasDropdown: false },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://interswitchgroup.com/assets/images/home/interswitch_logo.svg" 
              alt="Interswitch Logo" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-700 hover:text-primary flex items-center">
                  {link.title}
                  {link.hasDropdown && (
                    <FiChevronDown className="ml-1 group-hover:transform group-hover:rotate-180 transition-transform" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-gray-700 hover:text-primary"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;