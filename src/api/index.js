import { apiBaseUrl, isDev } from '../constants/env';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: isDev ? apiBaseUrl : '/api',
  timeout: 5000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const cookies = document.cookie.split(';');

  let accessToken = '';
  cookies.forEach((cookie) => {
    if (cookie.trim().startsWith('access_token=')) {
      accessToken = cookie.trim().substring('access_token='.length);
    }
  });

  config.headers['Content-Type'] = 'application/json';
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default axiosInstance;
