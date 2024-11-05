import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold  hover:text-yellow-600 ml-5">SHIVSHANKAR KUMAR</div>
      <ul className="flex space-x-4 mr-5 ">
        <li className=' hover:text-yellow-600'><a href="#home">HOME</a></li>
        <li className=' hover:text-yellow-600'><a href="#about">ABOUT</a></li>
        <li className=' hover:text-yellow-600'><a href="#projects">PROJECTS</a></li>
        <li className=' hover:text-yellow-600'><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
