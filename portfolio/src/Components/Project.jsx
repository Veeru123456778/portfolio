import React from 'react'
import Timeline from './Timeline'

const Project = () => {
  return (
    <div>
       <section id='projects' className='projects mt-28'>
      <h1 className='text-5xl font-bold flex justify-center'>
        <pre>
          $cd <span className='bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent'>Projects</span>
        </pre>
      </h1>
      <Timeline/>
      </section>
</div>
  )
}

export default Project
