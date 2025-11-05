// src/utils/api.js
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8080", // backend base URL
});
