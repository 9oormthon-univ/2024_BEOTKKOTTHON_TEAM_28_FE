import { AxiosError } from 'axios';
import axiosInstance from '..';

const postUserData = async (userData) => {
  try {
    const response = await axiosInstance.patch('/users', userData);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postUserData;
