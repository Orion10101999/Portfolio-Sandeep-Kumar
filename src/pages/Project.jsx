import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  const arrApi = [
    {
    "id": 1,
    "title" : 'Employee Mangement',
    "description" : 'Developed an API to perform CRUD operstions and load API data in the component , data in Bar diagram using chart.js ,Implement user authentication and authorization using JWT and Ensure proper error handling and validation for API requests.',
    "features" : "",
    "technologies" : ['React', 'Node' , 'mongoDB' , 'Express', 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/employee-management-mern',
    "weblink" : 'https://employee-management-mern.onrender.com/'
  },
    {
    "id": 2,
    "title" : 'invoice-management-system',
    "description" : 'Developed an API to perform CRUD operstions and load API data in the component , data in Bar diagram using chart.js ,Implement user authentication and authorization using JWT and Ensure proper error handling and validation for API requests.',
    "features" : "PDF Download",
    "technologies" : ['React', 'Node' , 'mongoDB' , 'Express', 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/mern-invoice-management-system',
    "weblink" : 'https://invoice-management-system-h4fd.onrender.com/'
  },
  {
  "id": 3,
  "title" : 'Counter Chart',
  "description" : 'Developed an Web Application . Created a Progress Bar based on the number such that if I add or subtract from the number, it should reflect on the progress bar (progress bar should update accordingly). Implement Undo/Redo for the mathematical operations.',
  "features" : "",
  "technologies" : ['React'],
  "link" : 'https://github.com/Orion10101999/Jarurat-Care-Counter-Chart-Js',
  "weblink" : 'https://jarurat-care-counter-chart-js.vercel.app/'
},
    {
    "id": 4,
    "title" : 'eState webApp',
    "description" : 'Developed an API to perform CRUD operstions and load API data in the component ,Implement user authentication and authorization using JWT and Ensure proper error handling and validation for API requests.',
    "features" : "Cloudinary , media assets, such as images and videos",
    "technologies" : ['React', 'Node' , 'mongoDB' , 'Express' , 'Redux toolkit' , 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/eState',
    "weblink" : ''
  },
  {
    "id": 5,
    "title" : 'Auth App',
    "description" : 'Developed an API to perform CRUD operstions , Image uploading ,Implement user authentication and authorization using JWT and Ensure proper error handling and validation for API requests.',
    "features" : "Google OAuth",
    "technologies" : ['React', 'Node' , 'mongoDB' , 'Express' , 'Redux toolkit' , 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/mern-auth',
    "weblink" : ''
  },
    {
    "id": 6,
    "title" : 'Book Store Management App',
    "description" : 'Developed an API to perform CRUD operstions to manage books,Implement user authentication and authorization using JWT .',
    "features" : "",
    "technologies" : ['React', 'Node' , 'mongoDB' , 'Express' , 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/BookStore',
    "weblink" : ''
  },
    {
    "id": 7,
    "title" : 'Matrix Color Change',
    "description" : 'This project is a React-based application that creates a 3x3 matrix of cells. Users can click on cells to change their color to green. When the ninth cell is clicked, the colors of the previously clicked cells change to orange in a specified order with a delay between each change. The application also includes a reset button to revert the matrix to its initial state.',
    "features" : "",
    "technologies" : ['React'],
    "link" : 'https://github.com/Orion10101999/MatrixColorChange',
    "weblink" : 'https://matrix-color-change.vercel.app/'
  },
    {
    "id": 8,
    "title" : 'authentication system ',
    "description" : 'Authentication login , signup page using tailwind css.',
    "features" : "",
    "technologies" : ['React' , 'Node' , 'Express' , 'Mysql' , 'jsonwebtoken'],
    "link" : 'https://github.com/Orion10101999/WEBMOBI-authentication-system-mysql',
    "weblink" : ''
  },
    {
    "id": 9,
    "title" : 'School Website ',
    "description" : 'Design and develop a school website to showcase proficiency in React.js and frontend development skills. like Home Page, About Us Page, Admisssion Page, Academics page , Faculty page ,using tailwind css',
    "features" : "",
    "technologies" : ['React' , 'tailwind css'],
    "link" : 'https://github.com/Orion10101999/school-website-react',
    "weblink" : 'https://school-website-react-zeta.vercel.app/'
  },
    {
    "id": 10,
    "title" : 'Webpage Creation - Figma to html ',
    "description" : 'This project is a simple, responsive website built using HTML, CSS, and JavaScript. The design is implemented based on a Figma file, with attention to detail in both the desktop and mobile layouts',
    "features" : "",
    "technologies" : ['html' , 'css' , 'javaScript' , 'figma'],
    "link" : 'https://github.com/Orion10101999/dt-figma-to-html',
    "weblink" : 'https://dt-figma-to-html.vercel.app/'
  },
    {
    "id": 11,
    "title" : 'Review Sentiment Analysis ',
    "description" : 'This project is a Review Sentiment Analysis App built using React.js. The app displays reviews fetched from a JSON file and allows users to toggle the visibility of translated content for each review.',
    "features" : "highlight paragraph",
    "technologies" : ['tailwind css' , 'React'],
    "link" : 'https://github.com/Orion10101999/Reviews',
    "weblink" : 'https://sentiment-review-tooltip.vercel.app/'
  },
]
  return (
    <section className="mt-8">
    <h2 className="text-2xl font-bold text-3xl text-blue-600">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {
        arrApi.map( item =><ProjectCard key={item.id} id={item.id} title={item.title} description={item.description} features={item.features} technologies={item.technologies} link={item.link} weblink={item.weblink}/>)
      }
    
    </div>
  </section>
  )
}

export default Project