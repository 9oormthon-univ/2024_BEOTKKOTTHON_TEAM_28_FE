import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberTasks = async (teamId, sort = 'all') => {
  try {
    const response = await axiosInstance.get(`/teams/${teamId}/works?sort=${sort}`);
    return response.data.data.workList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberTasks;
