import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="p-8 h-full dark:bg-slate-500 dark:text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-center p-5 ml-10 mr-10">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="mt-4 m-5 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold p-5 ">Get to know me!</h3>
          <p className="text-gray-600 dark:text-blue-50">
            Skilled software engineer with a Master of Computer Applications
            from NIT Warangal, specializing in web development with React,
            TypeScript, Tailwind CSS, and JavaScript. I have a proven track
            record of building responsive, user-friendly applications, including
            a dynamic quiz app and a portfolio website. Proficient in backend
            technologies like Node.js and databases like MySQL and MongoDB, I
            bring a full-stack approach to development. With certifications in
            React, Python, and web development, I’m passionate about leveraging
            my technical skills to solve complex problems and contribute to
            innovative projects in a collaborative environment
          </p>
        </div>

        <div>
          <h3 className="font-semibold p-5">Technical Skills</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100  ">
              C++
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              PYTHON
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              JAVA
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              HTML
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              CSS
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              TAILWIND CSS
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              JAVASCRIPT
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              REACT JS
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              MONGODB
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              MYSQL
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              NODEJS
            </span>
            <span className="bg-gray-300 p-2 rounded hover:bg-blue-500 text-gray-800 hover:text-yellow-100 ">
              GIT/GITHUB
            </span>
            {/* Add other skills similarly */}
          </div>
        </div>
      </div>
      <div className="m-5">
        <h3 className="text-1xl font-semibold mb-4 text-black ml-16 dark:text-white">
          Soft Skills
        </h3>
        <div className="grid grid-cols-6 gap-2">
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Communication
          </span>
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Problem Solving
          </span>
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Teamwork
          </span>
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Adaptability
          </span>
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Time Management
          </span>
          <span className="bg-gray-200 p-2 rounded text-center text-gray-800  hover:bg-blue-500 hover:text-yellow-100">
            Leadership
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
