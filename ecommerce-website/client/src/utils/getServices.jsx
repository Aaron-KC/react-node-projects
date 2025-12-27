import axios from "axios";

const getServices = axios.create({
  baseURL: import.meta.env.VITE_APIURL,
  headers: {
    Authorization: 'bearer ' + import.meta.env.VITE_APIKEY
  }
})

export default getServices