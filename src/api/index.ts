import axios from "axios";

const api = axios.create({
  baseURL: "https://challenge-seven-zeta.vercel.app/api/movies",
  timeout: 8000,
});

export default api;
