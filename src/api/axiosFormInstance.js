import axios from 'axios';

const axiosFormInstance = axios.create({
  baseURL: 'https://startupvalley.site/api',
  timeout: 5000,
});

axiosFormInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'multipart/form-data';
  config.headers.Authorization = `Bearer`;
  return config;
});

// axiosFormInstance.interceptors.response.use(
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

export default axiosFormInstance;
