import React from "react";
import myImage from "../photo/1st.png";

// import Navbar from './Navbar';
const Home: React.FC = () => {
  const home_headline1 = "Shivshankar kumar";
  const home_headline2 = "Software Developer";

  return (
    // <section id="home" className="flex flex-col items-center text-center p-8 bg-gray-200" >
    <section id="home" className="flex h-full  bg-gray-200 ">
      <div className="w-1/2 ml-10 mt-10">
        <h1 className="text-4xl font-bold m-5 ">Hey, I'm {home_headline1}</h1>
        <p className=" ml-5 text-gray-600 ">
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
