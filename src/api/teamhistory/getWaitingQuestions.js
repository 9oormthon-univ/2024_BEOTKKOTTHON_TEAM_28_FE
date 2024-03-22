import { AxiosError } from 'axios';
import axiosInstance from '..';

const getWaitingQuestions = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/questions/received?sort=pending`);

    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getWaitingQuestions;
