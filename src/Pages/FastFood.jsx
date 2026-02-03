import React, { useContext } from 'react'
import FCard from '../components/FCard'
import { FoodDataContext } from '../context/FoodContext'
import FCarousal from '../components/FCarousal'
import { IoMdText } from 'react-icons/io'

const FastFood = () => {
  const {food} = useContext(FoodDataContext)

  return (
    <div>
        <FCarousal />
        <div className='p-5 flex flex-wrap justify-center lg:justify-start gap-8'>
        {food.map((item, idx)=> (
          <div key={idx}>
            <FCard name={item.strArea} categ={item.strCategory} img={item.strMealThumb} />
          </div>
        ))}
    </div>
    </div>
  )
}

export default FastFood