import { AxiosError } from 'axios';
import axiosInstance from '..';

const postPeerReview = async ({ teamId, body }) => {
  try {
    return await axiosInstance.post(`/teams/${teamId}/works`, body);
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postPeerReview;
