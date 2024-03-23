import { AxiosError } from 'axios';
import axiosInstance from '..';

const getReceivedQuestions = async (id, sort = 'all') => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/questions/received?sort=${sort}`);
    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getReceivedQuestions;
