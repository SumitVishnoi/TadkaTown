import React from 'react'
import ShowLeftCard from './ShowLeftCard'
import ShowRightCard from './ShowRightCard'

const ShowCase = () => {
  return (
    <div className='flex flex-wrap justify-center gap-2 p-5 w-full'>
        <ShowLeftCard />
        <ShowRightCard />
    </div>
  )
}

export default ShowCase