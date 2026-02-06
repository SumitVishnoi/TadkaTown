import React, { useContext } from 'react'
import { DessertDataContext } from '../context/DessertContext'
import FCard from '../components/FCard'

const Dessert = () => {
  const {dessertFood} = useContext(DessertDataContext)

  console.log(dessertFood)
  return (
    <div className='p-5 flex flex-wrap justify-center lg:justify-start gap-8'>
      {dessertFood.slice(0, 50).map((item, idx)=> {
        return <div key={idx}>
          <FCard name={item.strMeal} categ={"dessert"} img={item.strMealThumb}/>
        </div>
      })}
    </div>
  )
}

export default Dessert