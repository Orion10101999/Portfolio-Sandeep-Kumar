import React from 'react';
import profileImage from '../assets/profile.jpg'; // Make sure to add your image in the `assets` folder
import AboutUs from './AboutUs';
import Project from './Project';
import Education from './Education';

const Home = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center flex justify-center items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          />
        <p className="text-lg text-gray-700 mx-5">
          Welcome to my portfolio! I am a passionate fullStack web developer with expertise in modern web technologies. Explore my projects and get in touch.
        </p>
      </div>
      <AboutUs/>
      <Project/>
    </section>
      <Education/>
          </>
  );
}

export default Home;
