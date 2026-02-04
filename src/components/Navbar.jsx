import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between item py-4 px-6 w-full z-10'>
        <div>
            <h1 className='font-bold text-xl text-[#BA5800] bg-black rounded-full p-3'>Food</h1>
        </div>
        <div className='lg:flex hidden items-center gap-5'>
            <h4 onClick={()=> navigate("/")} className='font-medium hover:border-b-2 border-[#BA5800] transition-all linear duration-75 cursor-pointer'>Home</h4>
            <h4 onClick={()=> navigate("fast_food")} className='font-medium hover:border-b-2 border-[#BA5800] transition-all linear duration-75 cursor-pointer'>Fast Food</h4>
            <h4 onClick={()=> navigate("main_course")} className='font-medium hover:border-b-2 border-[#BA5800] transition-all linear duration-75 cursor-pointer'>Main Course</h4>
            <h4 onClick={()=> navigate("dessert")} className='font-medium hover:border-b-2 border-[#BA5800] transition-all linear duration-75 cursor-pointer'>Dessert</h4>
        </div>
        <div className='flex items-center gap-5'>
            <IoSearch className='w-5 h-5'/>
            <button className='bg-[#BA5800] text-white font-medium px-6 py-2 rounded active:scale-95 cursor-pointer'>sign up</button>
        </div>
    </div>
  )
}

export default Navbar