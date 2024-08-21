import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-500 text-white p-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex-none">
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="text-white font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <nav> 
        <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sandeep Kumar
        </span>
        Portfolio
      </Link>
        </nav>
        <nav className="flex-none">
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/education" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
