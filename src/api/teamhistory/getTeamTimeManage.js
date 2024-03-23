import { AxiosError } from 'axios';
import axiosInstance from '..';

const getTeamTimeManage = async (id) => {
  try {
    const response = await axiosInstance.get(`/members/${id}/works`);
    return response.data.data.workList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getTeamTimeManage;
