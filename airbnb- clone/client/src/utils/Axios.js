import axios from 'axios'

export const axiosIns = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true
})