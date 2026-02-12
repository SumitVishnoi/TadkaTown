import React, { useContext } from 'react'
import { CourseDataContext } from '../context/CourseContex'

const Carousel = () => {
  const {mainFood} = useContext(CourseDataContext)
  return (
    <div className='flex justify-center w-full px-5'>
        {mainFood.map((item, idx)=> (
          <div key={idx} className=' w-full h-[60vh] bg-amber-800'>
            <img className='w-full h-full object-contain' src="" alt="" />
        </div>
        ))}
    </div>
  )
}

export default Carousel