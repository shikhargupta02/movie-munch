import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7264/api",
});
export default axiosInstance;
