// src/utils/api.js
import axios from "axios";


export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Add request interceptor to attach the correct token based on the endpoint
API.interceptors.request.use(
  (config) => {
    let token = null;

    // Determine which token to use based on the request URL
    if (config.url?.includes('/api/business/staff/login') ||
      config.url?.includes('/api/business/staff/profile')) {
      // Staff member authentication endpoints
      token = localStorage.getItem("staffToken");
    } else if (config.url?.includes('/api/business')) {
      // Business owner endpoints (including staff management)
      token = localStorage.getItem("businessToken");
    } else {
      // Customer endpoints (default)
      token = localStorage.getItem("userToken");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);