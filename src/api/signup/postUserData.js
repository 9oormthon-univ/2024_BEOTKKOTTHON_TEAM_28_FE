import { AxiosError } from 'axios';
import axiosInstance from '..';

const postUserData = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/sign-up', userData);
    console.log('Post User Data Response:', response.data);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postUserData;
