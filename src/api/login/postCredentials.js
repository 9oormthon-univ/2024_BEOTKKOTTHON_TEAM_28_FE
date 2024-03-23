import { AxiosError } from 'axios';
import axiosFormInstance from '../axiosFormInstance';

const postCredentials = async (discordId, password, setCookie) => {
  const formData = new FormData();
  formData.append('serial_id', discordId);
  formData.append('password', password);

  try {
    const response = await axiosFormInstance.post('/auth/sign-in', formData, {
      withCredentials: true,
    });

    const cookies = response.headers['set-cookie'];
    if (cookies) {
      cookies.forEach((cookie) => {
        document.cookie = cookie;
      });
    }
    console.log(setCookie);
    //  setCookie("jwt-token", token, { path: "/", secure: true });

    return response.data.success;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postCredentials;
