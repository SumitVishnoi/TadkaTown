import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import axios from 'axios'
import Footer from './components/Footer'
import FastFood from './Pages/FastFood'
import MainCourse from './Pages/MainCourse'
import Dessert from './Pages/Dessert'

const App = () => {


  return (
    <div className='w-full'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fast_food' element={<FastFood />}/>
        <Route path='/main_course' element={<MainCourse />}/>
        <Route path='/dessert' element={<Dessert />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App