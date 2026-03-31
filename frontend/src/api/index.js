import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-web-dpi3.onrender.com/api",
  withCredentials: true
});

export default API;