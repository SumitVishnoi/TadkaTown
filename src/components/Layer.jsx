import React from 'react'

const Layer = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center gap-3 w-full lg:w-[40%]'>
        <div className='w-[50%] h-50 '>
            <img className='w-full h-full object-contain' src="https://odishatourism.gov.in/content/dam/tourism/home/cusines-to-explore/rasagola.png" alt="" />
        </div>
        <div>
            <h2 className='font-semibold text-xl lg:text-left text-center'>Roas-gulla</h2>
            <p className='text-sm w-[90%] lg:text-left text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem, dignissimos libero sapiente eaque qui.</p>
        </div>
    </div>
  )
}

export default Layer