import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import axios from 'axios'
import Footer from './components/Footer'
import FastFood from './Pages/FastFood'

const App = () => {

  const api = async ()=> {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    console.log(response.data);
  }

  return (
    <div className='w-full'>
      {/* <button onClick={api} className='bg-emerald-600 text-white px-5 py-2 rounded m-5'>click</button> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fastfood' element={<FastFood />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App