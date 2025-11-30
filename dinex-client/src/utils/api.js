// src/utils/api.js
import axios from "axios";


export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Add request interceptor to attach token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
