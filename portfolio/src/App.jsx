import React from 'react'
import { BrowserRouter } from "react-router-dom";
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Project from './Components/Project.jsx'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Video from './Components/video.jsx';
import Technologies from './Components/Technologies.jsx';
import Timeline from './Components/Timeline.jsx';
const App = () => {
  return (
    <BrowserRouter>
    <div className=' bg-primary w-[100%] h-[100%]'>
    <div className='text-white'>
    <Navbar/>
      <Hero/>
      <div className=' mx-5 sm:mx-20'>
      <About/>
      <Technologies/>
      <Project/>
      <Contact/>
      </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

