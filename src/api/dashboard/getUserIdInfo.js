import { AxiosError } from 'axios';
import axiosInstance from '..';

const getUserIdInfo = async (id) => {
  try {
    const response = await axiosInstance.get(`/members/${id}/user-info`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getUserIdInfo;
