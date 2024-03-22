import { AxiosError } from 'axios';
import axiosInstance from '..';

const postUserInfo = async (body) => {
  try {
    const response = await axiosInstance.patch(`/users`, body);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postUserInfo;
