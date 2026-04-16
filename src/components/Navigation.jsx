import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Research', path: '/research' },
    { name: 'Field Stories', path: '/field-stories' },
    { name: 'Essays', path: '/essays' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      
      <div className="flex flex-row w-full justify-between items-center bg-[#151515] text-[#E0D6CE] px-5 py-4 sm:px-6 md:px-8 relative">
        <button
          onClick={toggleMenu}
          className="cursor-pointer p-2 -ml-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="font-bold whitespace-nowrap text-lg sm:text-xl md:text-2xl cursor-pointer tracking-tight">
            The Caffeina
          </p>
        </div>

        <div className="cursor-pointer p-2 -mr-2">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
          <div className="fixed top-0 left-0 h-full w-64 max-w-[80%] bg-[#1C1A19] z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 pt-20 gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-lg tracking-wide py-2 border-b border-[#2a2826] ${
                      isActive
                        ? 'text-[#C9A97A] font-medium'
                        : 'text-[#B0AAA4] hover:text-[#E0D6CE]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;