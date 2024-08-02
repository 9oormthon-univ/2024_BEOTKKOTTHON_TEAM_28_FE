import { AxiosError } from 'axios';
import axiosInstance from '..';

const postWorkInfo = async (membersId, content) => {
  try {
    const response = await axiosInstance.post(`/members/${membersId}/works`, {
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
