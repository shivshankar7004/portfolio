import React from "react";
import project1 from "../photo/portfolio.png";
import project2 from "../photo/pngwing.com.png";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 ">
      <h2 className="text-3xl font-bold mb-4 p-5 text-center">Projects</h2>
     

      <div className="flex bg-gray-50 shadow rounded p-4 m-4">
        
        <div className="w-1/2 p-4 place-items-center ">
          <h3 className="font-semibold mt-5">Portfolio</h3>
          <h4 className=" font-normal">( HTML, Css, JS, React.js, TailWind Css, TypeScript )</h4>
          <ul className="list-disc m-5 text-gray-600">
            <li>
            Developed a fully responsive portfolio website showcasing personal projects and skills using modern web
            technologies.
            </li>
            <li>
            PImplemented dynamic UI components and animations using React and Tailwind CSS, enhancing user
            engagement and experience.
            </li>
            <li>Leveraged TypeScript for type-safe code, improving maintainability and reducing potential runtime errors.</li>
            <li>Optimized performance with efficient loading strategies and best practices in web development.</li>
            <li>Integrated smooth navigation and interactive elements to create an intuitive user interface.</li>
          </ul>
        </div>
        <div className="w-1/2 p-4">
        <a href="#Navbar">
          <img src={project1} alt="Project" className="w-full h-auto" />
          </a>
        </div>
      </div>

      <div className="flex bg-gray-50 shadow rounded p-4 m-4">
        <div className="w-1/2 p-4">
          <img src={project2} alt="Project" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-4 place-items-center  ">
          <h3 className="font-semibold mt-10">Quiz App</h3>
          <h4 className="">( HTML, Css, JS, TainWind Css, React.js )</h4>
          <ul className="list-disc m-5 text-gray-600">
            <li>
              Developed a responsive quiz app with real-time score tracking and
              feedback.
            </li>
            <li>
              Utilized React hooks (useState, useEffect) for dynamic state
              management.
            </li>
            <li>Added timer functionality and final score breakdown.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
