import React from "react";
import myImage from "../photo/1st.png";
import { Typewriter } from "react-simple-typewriter";

// import Navbar from './Navbar';
const Home: React.FC = () => {
 
  return (
    // <section id="home" className="flex flex-col items-center text-center p-8 bg-gray-200" >
    <section id="home" className="flex h-full  bg-gray-200  dark:bg-gray-700">
      <div className="w-1/2 ml-10 mt-10">
        <h1 className="text-4xl font-bold m-5 dark:text-white">
          Hey, I'm{" "}
          <span className="text-red-600 dark:text-yellow-400">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              deleteSpeed={50}
              delaySpeed={3000}
              words={[
                "Shivshankar Kumar",
                "Software Developer",
                "Web Developer",
              ]}
            />
          </span>
        </h1>
        <p className=" ml-5 text-gray-600 dark:text-blue-50">
          MCA Postgraduate from NITW | Expert in HTML, CSS, JavaScript, React,
          Node.js, TypeScript & Tailwind CSS
        </p>
      </div>
      <div className="w-1/2">
        <img className="" src={myImage} alt="MY IMAGE" />
      </div>
      {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Projects</button> */}
    </section>
  );
};

export default Home;
