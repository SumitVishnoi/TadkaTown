import axios from "axios";

export const fastFoodApi = async () => {
  const response = await axios.get(import.meta.env.VITE_API);
  return response.data;
};

export const mainCourseApi = async () => {
  const response = await axios.get(import.meta.env.VITE_MAIN_COURSE_API);
  return response.data;
};

export const dessertApi = async () => {
  const response = await axios.get(import.meta.env.VITE_DESSERT_API);
  return response.data;
};
