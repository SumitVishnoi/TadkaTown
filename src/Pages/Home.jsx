import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import ShowCase from '../components/ShowCase'

const Home = () => {
  return (
    <div className='bg-zinc-100 flex flex-col items-center w-full'>
        <Carousel />
        <Hero />
        <ShowCase />
    </div>
  )
}

export default Home