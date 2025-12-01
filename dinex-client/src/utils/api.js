// src/utils/api.js
import axios from "axios";


export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

API.interceptors.request.use(
  (config) => {
    let token = null;

    const url = config.url || "";

    // Staff endpoints (orders + staff routes)
    if (
      url.startsWith("/api/orders") ||
      url.startsWith("/api/business/staff")
    ) {
      token = localStorage.getItem("staffToken");
    }

    // Business owner endpoints
    else if (url.startsWith("/api/business")) {
      token = localStorage.getItem("businessToken");
    }

    // Customer endpoints (default)
    else {
      token = localStorage.getItem("userToken");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
