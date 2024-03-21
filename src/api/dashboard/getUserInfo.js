import { AxiosError } from 'axios';
import axiosInstance from '..';

const getUserInfo = async ({ teamId }) => {
  try {
    const response = await axiosInstance.get(`/teams/${teamId}/questions`);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getUserInfo;
