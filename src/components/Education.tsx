import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="Education" className="p-8 bg-gray-100 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="space-y-4">
        {/* Example Education Entry */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
          <p className="text-gray-600">National Institute of Technology, Warangal (NITW)</p>
          <p className="text-gray-500">2021 - 2024</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Specialized in web development with a focus on modern JavaScript frameworks.</li>
            <li>Worked on several projects, including a dynamic quiz app and portfolio website.</li>
            <li>Engaged in collaborative projects and built a solid foundation in software engineering principles.</li>
          </ul>
        </div>

        {/* Add more entries as needed */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Bachelor of Computer Application (BCA)</h3>
          <p className="text-gray-600">Magadh University</p>
          <p className="text-gray-500">2017 - 2020</p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Graduated with distinction, focusing on software development and data structures.</li>
            <li>Developed a capstone project on e-commerce application.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
