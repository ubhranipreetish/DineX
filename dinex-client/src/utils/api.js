// src/utils/api.js
import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL , // backend base URL
});
