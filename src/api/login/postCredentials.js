import { AxiosError } from 'axios';
import axiosInstance from '..';

const postCredentials = async (discordId, password) => {
  const formData = new FormData();
  formData.append('serial_id', discordId);
  formData.append('password', password);

  try {
    const response = await axiosInstance.fetch('/api/auth/sign-in', {
      method: 'POST',
      body: formData,
    });

    console.log('Login Response:', response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postCredentials;
