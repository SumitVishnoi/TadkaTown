import React, { createContext, useEffect, useState } from 'react'
import { mainCourseApi } from '../api/api'

export const CourseDataContext = createContext()
const CourseContex = ({children}) => {
    const [mainFood, setMainFood] = useState([])

    const getMainFood = async ()=> {
        const data = await mainCourseApi()
        setMainFood(data.meals)
    }

    const value = {
        mainFood,
        setMainFood,
        getMainFood
    }

    useEffect(()=> {
        getMainFood()
    }, [])
  return (
    <div>
        <CourseDataContext.Provider value={value}>
            {children}
        </CourseDataContext.Provider>
    </div>
  )
}

export default CourseContex