import { AxiosError } from 'axios';
import axiosInstance from '..';

const getRequestedQuestion = async ({ teamId }) => {
  try {
    return await axiosInstance.get(`/teams/${teamId}/questions`);
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getRequestedQuestion;
