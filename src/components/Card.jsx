import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const Card = ({name, image}) => {
  return (
    <div className='bg-[#F3EBD4] w-60 flex flex-col items-center gap-3 p-5 rounded-lg'>
        <div className='w-[90%] h-40'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <h2 className='font-semibold text-xl'>{name}</h2>
        <button className='px-6 py-2 bg-[#FFBD23] font-medium border-none outline-none rounded active:scale-95 cursor-pointer flex items-center gap-2'>Buy now <span><IoArrowForward className='w-5 h-5'/></span></button>
    </div>
  )
}

export default Card