import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav id='Navbar' className="flex justify-between items-center p-4 bg-gray-800 text-white ">
      <div className="text-lg font-bold ml-8">SHIVSHANKAR KUMAR</div>
      <ul className="flex space-x-4 mr-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
