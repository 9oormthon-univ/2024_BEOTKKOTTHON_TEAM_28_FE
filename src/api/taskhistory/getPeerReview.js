import { AxiosError } from 'axios';
import axiosInstance from '..';

const getPeerReview = async ({ teamId }) => {
  try {
    return await axiosInstance.get(`/teams/${teamId}/works`);
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getPeerReview;
