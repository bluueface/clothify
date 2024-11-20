import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://fakestoreapi.com",
  //timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      if (error.response.status >= 500) {
        console.error("Server error.");
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
