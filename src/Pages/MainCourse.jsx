import React, { useContext } from "react";
import { CourseDataContext } from "../context/CourseContex";
import FCard from "../components/FCard";

const MainCourse = () => {
  const { mainFood } = useContext(CourseDataContext);

  console.log(mainFood)
  return (
    <div>
      <div className="p-5 flex flex-wrap justify-center lg:justify-start gap-8">
        {mainFood.map((item, idx) => (
          <div key={idx}>
            <FCard
              name={item.strMeal}
              categ={"vegie"}
              img={item.strMealThumb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCourse;
