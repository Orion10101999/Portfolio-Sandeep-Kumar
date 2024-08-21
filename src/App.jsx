import React from 'react';
import Header from './components/Header'; // Adjust the import path as needed
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Foooter from './components/Foooter';
import Project from './pages/Project';
import Education from './pages/Education';

const App = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <main className="p-8 flex-grow">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/education' element={<Education/>}/>
        </Routes>        
      </main>
      <Foooter/>
    </div>
  );
}

export default App;
