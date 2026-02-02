import React, { useContext } from 'react'
import FCard from '../components/FCard'
import FCarousal from '../components/FCarousal'
import { FoodDataContext } from '../context/FoodContext'

const FastFood = () => {
  const {food} = useContext(FoodDataContext)
  
  console.log(food)
  return (
    <div>
        <FCarousal />
        <div className='p-5 flex flex-wrap justify-center lg:justify-start gap-8'>
        {food.map((item)=> (
          <div>
            <FCard name={item.strArea} categ={item.strCategory} img={item.strMealThumb} />
          </div>
        ))}
    </div>
    </div>
  )
}

export default FastFood