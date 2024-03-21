import { AxiosError } from 'axios';
import axiosInstance from '..';

const getReceivedQuestion = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/teams/${id}/questions/received`);
    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getReceivedQuestion;
