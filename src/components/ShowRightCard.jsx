import React from 'react'

const ShowRightCard = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-30 rounded-lg bg-[#F4E9CB] w-full lg:w-fit px-20 py-5'>
        <div>
            <h2 className='text-3xl font-semibold mb-3'>Drink</h2>
            <button className='bg-[#BA5800] text-white font-medium px-6 py-2 rounded active:scale-95 cursor-pointer'>Buy now</button>
        </div>
        <div className='w-40 h-60'>
            <img className='w-full h-full object-cover' src="https://static.vecteezy.com/system/resources/previews/045/933/303/non_2x/vintage-isolated-milk-bottle-cut-out-stock-photo-collection-free-png.png" alt="" />
        </div>
    </div>
  )
}

export default ShowRightCard