import React, { useContext, useEffect, useState } from 'react'
import { FoodDataContext } from '../context/FoodContext'

const FCarousal = () => {
  const { food } = useContext(FoodDataContext)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (food.length > 0) {
      setInterval(()=> {
        const randomIndex = Math.floor(Math.random() * food.length)
        setIndex(randomIndex)
      }, 5000)
    }
  }, [food])

  if (food.length === 0) return <p className='flex justify-center'>Loading...</p>

  return (
    <div>
      <div className="bg-black flex justify-center items-center h-[80vh]  ">
        <img
          src={food[index].strMealThumb}
          alt={food[index].strMeal}
          className='w-[90%] h-full object-cover object-center'
        />
      </div>
    </div>
  )
}

export default FCarousal
