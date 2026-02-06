import React, { createContext, useEffect, useState } from "react";
import { dessertApi } from "../api/api";

export const DessertDataContext = createContext();

const DessertContext = ({ children }) => {
  const [dessertFood, setDessertFood] = useState([]);

  const getDessertFood = async () => {
    const data = await dessertApi();
    setDessertFood(data.meals);
  };

  const value = {
    dessertFood,
    setDessertFood,
    getDessertFood,
  };

  useEffect(() => {
    getDessertFood();
  }, []);
  return (
    <div>
      <DessertDataContext.Provider value={value}>
        {children}
      </DessertDataContext.Provider>
    </div>
  );
};

export default DessertContext;
