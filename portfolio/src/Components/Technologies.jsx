import React from 'react'
import { technologies } from '../constants/constant'

const Technologies = () => {
  return (
    <section className='text-5xl mt-28 flex flex-col justify-center font-bold items-center'>
    <h1><span className='bg-gradient-to-r from-cyan to-blue  bg-clip-text text-transparent'>Too</span>ls & <span className='bg-gradient-to-r from-cyan to-blue  bg-clip-text text-transparent'>Tech</span>nologies</h1>
     <div className='grid sm:ml-10 grid-cols-4 md:grid-cols-7 xl:grid-cols-8 sm:grid-cols-5 mt-10 items-center gap-5 w-full'>
         {technologies.map((imgLink)=>{
            return <img key={imgLink.name} src={imgLink.icon} alt={imgLink.name} className='w-24 h-24 border-2 border-gray-400 p-3 sm:p-5 rounded-md hover:shadow-lg hover:border-white hover:shadow-slate-200 z-10'/>
         })}
     </div>
    </section>
  )
}

export default Technologies
