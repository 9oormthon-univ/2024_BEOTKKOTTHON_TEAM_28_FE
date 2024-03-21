import { AxiosError } from 'axios';
import axiosInstance from '..';

const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getUserInfo;
