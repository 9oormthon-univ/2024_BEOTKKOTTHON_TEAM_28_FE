import { AxiosError } from 'axios';
import axiosFormInstance from '../axiosFormInstance';

const postCredentials = async (discordId, password) => {
  const formData = new FormData();
  formData.append('serial_id', discordId);
  formData.append('password', password);

  try {
    const response = await axiosFormInstance.post('/auth/sign-in', formData);

    const cookies = response.headers['set-cookie'];
    if (cookies) {
      cookies.forEach((cookie) => {
        document.cookie = cookie;
      });
    }

    return response.data.success;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postCredentials;
