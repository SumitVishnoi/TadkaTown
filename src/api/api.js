import axios from "axios"


export const fastFoodApi = async ()=> {
    const response = await axios.get(import.meta.env.VITE_API)
    return response.data
}