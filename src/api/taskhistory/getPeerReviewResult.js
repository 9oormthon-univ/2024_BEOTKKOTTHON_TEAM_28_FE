import { AxiosError } from 'axios';
import axiosInstance from '..';

const getPeerReviewResult = async (id) => {
  try {
    const response = await axiosInstance.get(`/members/${id}/contribution`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getPeerReviewResult;
