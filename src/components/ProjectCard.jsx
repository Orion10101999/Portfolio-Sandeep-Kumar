import React from 'react';

const ProjectCard = ({id , title, description, features, technologies, link, weblink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-gray-50 p-6">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{`${id}. `}{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div>
          <p className="text-gray-700 mb-4 font-semibold">{features ? `features : ${features}` : ''}</p>

        </div>
        <div className='mt-2'>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300 block mb-2"
            >
              View Project on GitHub
            </a>
          )}
          {weblink && (
            <a 
              href={weblink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300 block"
            >
              Website link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
