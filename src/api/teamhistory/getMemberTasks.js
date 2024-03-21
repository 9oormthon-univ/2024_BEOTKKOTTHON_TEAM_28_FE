import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberTasks = async ({ teamId }) => {
  try {
    const response = await axiosInstance.get(`/teams/${teamId}/works`);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberTasks;
