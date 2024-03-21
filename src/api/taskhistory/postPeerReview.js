import { AxiosError } from 'axios';
import axiosInstance from '..';

const postPeerReview = async ({ teamId, body }) => {
  try {
    const response = await axiosInstance.post(`/teams/${teamId}/works`, body);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postPeerReview;
