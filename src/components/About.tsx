import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="p-8">
      <div className="grid place-items-center ">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-bold p-5">Get to know me!</h3>
          <p className="ml-6">
            Skilled software engineer with a Master of Computer Applications
            from NIT Warangal, specializing in web development with React,
            TypeScript, Tailwind CSS, and JavaScript. I have a proven track
            record of building responsive, user-friendly applications, including
            a dynamic quiz app and a portfolio website. Proficient in backend
            technologies like Node.js and databases like MySQL and MongoDB, I
            bring a full-stack approach to development. With certifications in
            React, Python, and web development, I'm passionate about leveraging
            my technical skills to solve complex problems and contribute to
            innovative projects in a collaborative environment
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold p-5">My Skills</h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">HTML</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">CSS</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">TAILWIND CSS</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">JAVASCRIPT</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">REACT</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">NODEJS</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">MONGODB</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">GIT</span>
            <span className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:text-white">GITHUB</span>
            {/* Add other skills similarly */}
          </div>
        </div>
      </div>

      <div className="grid place-items-center">
        
        <a
          className=" mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-100 hover:text-black"
          href="#contact"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
};
export default About;