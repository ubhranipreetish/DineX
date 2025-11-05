// src/utils/api.js
import axios from "axios";

export const API = axios.create({
  baseURL: "https://dinex-24s9.onrender.com/", // backend base URL
});
