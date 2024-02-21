import axios from "axios";

export const gymlink = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true
})
