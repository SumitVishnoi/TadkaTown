import React, { createContext, useEffect, useState } from "react";
import { fastFoodApi } from "../api/api";


export const FoodDataContext = createContext();

const FoodContext = ({ children }) => {
    const[food, setFood] = useState([])

    const getFood = async ()=> {
      const data = await fastFoodApi()

      setFood(data.meals)
    }

    useEffect(()=> {
      getFood()
    }, [])

    const value = {
      food, 
      setFood,
      getFood
    }

  return (
    <div>
      <FoodDataContext.Provider value={value}>{children}</FoodDataContext.Provider>
    </div>
  );
};

export default FoodContext;
