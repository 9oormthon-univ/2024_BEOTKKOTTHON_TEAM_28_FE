import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://startupvalley.site/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer`;
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
