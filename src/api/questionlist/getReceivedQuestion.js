import { AxiosError } from 'axios';
import axiosInstance from '..';

const getReceivedQuestion = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/members/${id}/retrieve-list`);
    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getReceivedQuestion;
