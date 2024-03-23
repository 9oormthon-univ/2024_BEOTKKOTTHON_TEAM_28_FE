import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://startupvalley.site/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjo5LCJyb2xlIjoiVVNFUiIsImlhdCI6MTcxMTEwOTU0MiwiZXhwIjoxNzExMTk1OTQyfQ.5lNoHMEvqGP6sm9YrZKRdsumwLTHtbF5eRoXFpU8ZvEUBl6RWD3e9pCyMCte5cZOR9EtcF91uY0gykstv4di5Q`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      window.location.href = '/login';
    }

    return await Promise.reject(error);
  },
);

export default axiosInstance;
