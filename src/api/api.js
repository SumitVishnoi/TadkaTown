import axios from "axios"


export const api = async ()=> {
    const response = await axios.get(import.meta.VITE_API)
    return response.data
}