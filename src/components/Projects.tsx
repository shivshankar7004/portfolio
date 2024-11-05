import React from "react";
import Quiz from './images/45999.jpg';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="grid place-items-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p>Here you will find some of the personal and clients projects that I created with each 
        project containing its own case study</p>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <img
            src={Quiz}
            alt="Project"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 p-4 ml-5" >
          <h3 className="text-2xl font-bold m-2">Quiz App</h3>
          <ul className="list-disc ml-5">
            <li>Developed a responsive quiz app with real-time score tracking and feedback.</li>
            <li>Utilized React hooks (useState, useEffect) for dynamic state management.</li>
            <li>Added timer functionality and final score breakdown.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
