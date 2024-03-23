import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://startupvalley.site/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjoxMiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MTExNzU0NjIsImV4cCI6MTcxMTI2MTg2Mn0.EiVjaIH2Jz6_rC07MOWu3Ww3adZ6rmK0fNaav4pQi3ep1ssaiM3T0A2pNaUf-x8qYclUHBA0e3xQ2tw4FBvmwQ`;
  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       window.location.href = '/login';
//     }

//     return await Promise.reject(error);
//   },
// );

export default axiosInstance;
