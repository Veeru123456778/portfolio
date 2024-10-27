import React from 'react'
import profile from '../assets/profilepic.webp';
const About = () => {
  return (
    <section id='about' className='about'>
       <h1 className='flex justify-center'><pre className='text-5xl font-bold '>$man <span className='bg-gradient-to-r from-cyan to-blue  bg-clip-text text-transparent'>VARUN</span></pre></h1>
       <div className='flex flex-col sm:flex sm:flex-row justify-around items-center mt-10 gap-5 sm:gap-0'>
      <img src= {profile} className='h-60 w-60 rounded-full relative border-2 shadow-md hover:shadow-slate-200'/>
      <p className=' w-full sm:w-1/2 text-xl'>
I’m a full-stack developer with 2 years of experience building dynamic interfaces using React,Tailwind CSS and backend solutions with Node.js and Express.js. I work with databases like MySQL, PostgreSQL, and MongoDB, and am currently diving into DevOps while sharpening my DSA skills.</p>
      </div>

      </section>
  )
}

export default About
