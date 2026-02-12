import React, { useContext } from 'react'
import Card from './Card'
import Layer from './Layer'
import { CourseDataContext } from '../context/CourseContex'

const Hero = () => {
  const {mainFood} = useContext(CourseDataContext)
  return (
    <div className='flex flex-col items-center justify-center gap-5 px-5 py-10'>
        <div className='flex flex-wrap items-center justify-center gap-10'>
       {mainFood.slice(0, 5).map((item, idx)=> (
        <div key={idx}>
           <Card name={item.strMeal} image={item.strMealThumb}/>
        </div>
       ))}
    </div>
        <div className='flex flex-wrap gap-3 items-center justify-center'>
            <Layer />
            <hr className='bg-gray-500 lg:h-50 lg:w-1'/>
            <Layer />
        </div>
    </div>
  )
}

export default Hero