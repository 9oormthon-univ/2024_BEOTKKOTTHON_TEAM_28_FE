import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://startupvalley.site/api',
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjo5LCJyb2xlIjoiVVNFUiIsImlhdCI6MTcxMTAzMTAzMiwiZXhwIjoxNzExMTE3NDMyfQ.wxwCNvl1h3DwswUjTYHJzfEhDKVlSpMt6GVjJAVifr2RsKnfoZ-suxZbYnRIquS1ArKLtSOLPfA4Kjg1B_W_Mw`;
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
