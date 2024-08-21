import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'Ducat India Noida Sector - 16',
      degree: ' Full Stack Web Devlopment ',
      year: '2023 - 2024',
      description: 'Focused on software engineering, and web development.',
    },
    {
      institution: 'Madhyanchal Professional University Ratibad, Bhopal',
      degree: 'Bachelor of Technology In Mechanical Engineering',
      year: '2019 - 2022',
      description: '8.3 CGPA ',

    },
    {
      institution: 'Goverment Polytechnic Raghopur , Supaul , Bihar',
      degree: 'Polytechnic Engineering',
      year: '2016 - 2019',
      description: '77.6 % ',
    },
    {
      institution: 'U.M.K.K Beldaur Khagaria , Bihar',
      degree: '10th',
      year: '2014',
      description: '66.6 % '
    },
    // Add more education entries as needed
  ];

  return (
    <section className="p-8">
    <section className="bg-gray-200 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Technology :-
      </h2>
      <div className="text-gray-700 leading-relaxed">
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Programming Language : </strong> JavaScript , Python </li>
          <li><strong>FrontEnd : </strong> html , css , javascript </li>
          <li><strong>BackEnd : </strong> Node.js , expressJs  </li>
          <li><strong>Database : </strong>  mongoDb , mySql </li>
          <li><strong>JavaScript Frameworks and Libraries : </strong> ReactJs , ReactNative , NextJs , expo </li>
          <li><strong> CSS Frameworks and Libraries : </strong> tailwind css , Bootstrap , materialUI </li>
          <li><strong> python Framework : </strong> django </li>
        </ul>
        </div>
        </section>
      <h2 className="text-3xl font-bold my-6 text-blue-600">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600">{edu.institution}</h3>
            <h4 className="text-lg font-medium text-gray-800">{edu.degree}</h4>
            <p className="text-gray-600 mb-2">{edu.year}</p>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
