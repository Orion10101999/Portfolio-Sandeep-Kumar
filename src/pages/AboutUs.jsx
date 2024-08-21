import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-200 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        About Me
      </h2>
      <div className="text-gray-700 leading-relaxed">
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Name : </strong> Sandeep Kumar</li>
          <li><strong>Email ID : </strong> sandeepkmt184@gmail.com</li>
          <li><strong>Mobile No : </strong> 7491878069</li>
          <li><strong>GitHub Profile : </strong> 
            <a 
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300" 
              href="https://github.com/Orion10101999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://github.com/Orion10101999
            </a>
          </li>
          <li><strong>LinkedIn Profile : </strong> 
            <a 
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300" 
              href="https://www.linkedin.com/in/sandeep-kumar-91a68628b" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/sandeep-kumar-91a68628b
            </a>
          </li>
          <li><strong>Resume Link : </strong> 
            <a 
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300" 
              href="https://drive.google.com/file/d/1uHJNf-4dKHzmcCOY_PuGlqauv7l7N1tX/view" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://drive.google.com/file/d/1uHJNf-4dKHzmcCOY_PuGlqauv7l7N1tX/view
            </a>
          </li>
        </ul>
      </div>
      <h2 className="text-3xl font-bold text-blue-600 mb-4  mt-5">
        My Experience
      </h2>
      <div className="text-gray-700 leading-relaxed">
        As a MERN stack developer :
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Relevant Experience:</strong> I have over one year of hands-on experience developing full-stack applications using MongoDB, Express.js, React, and Node.js.</li>
          <li><strong>Problem-Solving Ability:</strong> I excel at identifying and resolving issues quickly, ensuring smooth development progress through effective debugging and troubleshooting.</li>
          <li><strong>Strong Communication:</strong> I value teamwork and have experience collaborating in environments where clear communication and code reviews are key to success.</li>
          <li><strong>Continuous Learning:</strong> I stay updated with the latest trends, tools, and best practices in the MERN stack, ensuring I can bring innovative solutions to your projects.</li>
          <li><strong>Adaptability:</strong> I’ve successfully adapted to various project requirements and technologies, making me flexible and capable of handling the dynamic nature of software development.</li>
        </ul>
      </div>
      <div className='mt-5 text-xl font-semibold'>These qualities make me confident that I can contribute effectively to team and help deliver high-quality results.</div>
      <h2 className="text-3xl font-bold text-blue-600 mb-4  mt-5">
        Hobbies :
      </h2>
      <div className="text-gray-700 leading-relaxed">
        <ul className="list-disc list-inside mt-4 space-y-2">
       <li>playing chess</li>
       <li>watching , listening si-fi stories and movies</li>
       <li>Cricket</li>
          <li><strong>Address :</strong> Noida Sector - 16</li>
        </ul>

      </div>
    </section>
  );
}

export default AboutUs;
