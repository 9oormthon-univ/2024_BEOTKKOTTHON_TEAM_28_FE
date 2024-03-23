import { AxiosError } from 'axios';
import axiosInstance from '..';

const getReceivedQuestion = async (id, sort = 'all') => {
  try {
    const response = await axiosInstance.get(`/teams/members/${id}/retrieve-list?sort=${sort}`);
    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getReceivedQuestion;
