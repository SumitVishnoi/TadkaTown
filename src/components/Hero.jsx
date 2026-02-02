import React from 'react'
import Card from './Card'
import Layer from './Layer'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 px-5 py-10'>
        <div className='flex flex-wrap items-center justify-center gap-10'>
        <Card />
        <Card />
        <Card />
        <Card />
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