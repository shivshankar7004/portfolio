import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="flex flex-col items-center text-center p-8 bg-gray-200">
      <h1 className="text-4xl font-bold">Hey, I'm Shivshankar Kumar</h1>
      <p>MCA Postgraduate from NITW | Expert in HTML, CSS, JavaScript, React, Node.js, TypeScript & Tailwind CSS</p>

      {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Projects</button> */}
      <a className='mt-4 px-6 py-2 bg-blue-500 text-white rounded  hover:bg-blue-100 hover:text-black' href="#projects">PROJECTS</a>
    </section>
  );
};

export default Home;
