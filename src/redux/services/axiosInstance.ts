import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { store } from '../store'; // Adjust path as needed
import { API } from '../../constants'; // Base URL, etc.

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API.BaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = store.getState()?.auth?.accessToken;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional: handle errors globally)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Optionally handle token refresh or redirect to login
    if (error.response?.status === 401) {
      console.warn('Unauthorized - possibly redirect to login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
