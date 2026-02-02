import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='w-full bg-[#cfcccc] flex flex-wrap justify-around items-center gap-10'>
        <div >
            <img src="https://png.pngtree.com/png-vector/20231211/ourmid/pngtree-group-of-fast-food-products-png-image_11219877.png" alt="" />
        </div>
        <div>
            <div className='flex flex-wrap border-b-2 border-white'>
            <div className='p-10'>
            <h4 className='text-[#BA5800] font-medium text-xl'>Fast food</h4>
            <ul className='text-[#3c3215] mt-3'>
                <li className='hover:text-black'>Maggi</li>
                <li className='hover:text-black'>Pizza</li>
                <li className='hover:text-black'>Burger</li>
                <li className='hover:text-black'>Sandwich</li>
            </ul>
        </div>
        <div className='p-10'>
            <h4 className='text-[#BA5800] font-medium text-xl'>Main course</h4>
            <ul className='text-[#3c3215] mt-3'>
                <li className='hover:text-black'>Maggi</li>
                <li className='hover:text-black'>Pizza</li>
                <li className='hover:text-black'>Burger</li>
                <li className='hover:text-black'>Sandwich</li>
            </ul>
        </div>
        <div className='p-10'>
            <h4 className='text-[#BA5800] font-medium text-xl'>Dessert</h4>
            <ul className='text-[#3c3215] mt-3'>
                <li className='hover:text-black'>Maggi</li>
                <li className='hover:text-black'>Pizza</li>
                <li className='hover:text-black'>Burger</li>
                <li className='hover:text-black'>Sandwich</li>
            </ul>
        </div>
        </div>
        <div className='flex justify-center items-center gap-5 py-5'>
            <p><AiFillInstagram className='w-6 h-6'/></p>
            <p><FaFacebookF className='w-6 h-6'/></p>
            <p><FaXTwitter className='w-6 h-6'/></p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer