import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import axios from 'axios'
import Footer from './components/Footer'
import FastFood from './Pages/FastFood'
import MainCourse from './Pages/MainCourse'
import Dessert from './Pages/Dessert'

const App = () => {

  const mainCourseApi = async ()=> {
    const response = await axios.get(import.meta.env.VITE_MAIN_COURSE_API)
    console.log(response.data.meals);
  }

  mainCourseApi()

  return (
    <div className='w-full'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fastfood' element={<FastFood />}/>
        <Route path='/fastfood' element={<MainCourse />}/>
        <Route path='/fastfood' element={<Dessert />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App