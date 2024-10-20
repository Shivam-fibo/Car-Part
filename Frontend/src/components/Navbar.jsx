import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/aboutUs' },
    { id: 3, text: 'Shop by Car', to: 'CarPartSelector' },
    { id: 4, text: 'Contact', to: '/contactUs' },
  ];

  return (
    <div className="bg-white border-gray-200">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-black">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          AutoParts Hub
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-[#00df9a] duration-300">
              <Link to={item.to} className="text-black">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          isOpen ? 'left-0' : 'left-[-100%]'
        } fixed top-0 w-[70%] h-full bg-white text-black border-r border-gray-900 ease-in-out duration-500 md:hidden z-50`}
      >
        <Link to="/" className="text-3xl font-bold text-[#00df9a] m-6">
          AutoParts Hub
        </Link>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-600 hover:bg-[#00df9a] duration-300 hover:text-black"
          >
            <Link to={item.to} onClick={() => setIsOpen(false)} className="text-black">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
