// client/src/api/index.js
import axios from "axios";

// Create an axios instance for all API calls
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true, // allows cookies (important for auth)
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
