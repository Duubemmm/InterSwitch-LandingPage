import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { title: "About Us", hasDropdown: true },
    { title: "What We Do", hasDropdown: true },
    { title: "Financial Inclusion", hasDropdown: false },
    { title: "Corporate Responsibility", hasDropdown: false },
    { title: "News & Insights", hasDropdown: false },
    // Removed "Contact" from here; it's replaced with an image dropdown
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

            {/* Image Dropdown for Contact */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center"
              >
                <img
                  src="https://interswitchgroup.com/assets/images/home/nigeria.png"
                  alt="Contact"
                  className="w-8 h-8"
                />
                <FiChevronDown className="ml-1 text-gray-700 transition-transform transform group-hover:rotate-180" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img
                        src="https://interswitchgroup.com/assets/images/home/kenya.png"
                        alt="Option 1"
                        className="w-6 h-6 mr-3"
                      />
                      <span>Contact Option 1</span>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img
                        src="https://interswitchgroup.com/assets/images/home/uganda.png"
                        alt="Option 2"
                        className="w-6 h-6 mr-3"
                      />
                      <span>Contact Option 2</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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

            {/* Image Dropdown for Contact */}
            <div className="relative py-2">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center"
              >
                <img
                  src="https://interswitchgroup.com/assets/images/home/idea.svg"
                  alt="Contact"
                  className="w-8 h-8"
                />
              </button>

              {dropdownOpen && (
                <div className="mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img
                        src="https://interswitchgroup.com/assets/images/home/idea.svg"
                        alt="Option 1"
                        className="w-6 h-6 mr-3"
                      />
                      <span>Contact Option 1</span>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img
                        src="https://interswitchgroup.com/assets/images/home/idea.svg"
                        alt="Option 2"
                        className="w-6 h-6 mr-3"
                      />
                      <span>Contact Option 2</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
