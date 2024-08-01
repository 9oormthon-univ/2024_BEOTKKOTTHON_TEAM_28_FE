import { AxiosError } from 'axios';
import axiosInstance from '..';

const postWorkInfo = async (content) => {
  try {
    const response = await axiosInstance.post(`/teams/work`, {
      content,
    });
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postWorkInfo;
