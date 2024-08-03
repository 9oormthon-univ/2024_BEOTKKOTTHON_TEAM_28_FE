import { AxiosError } from 'axios';
import axiosInstance from '..';

const getTeamInfo = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      return err.response;
    }
  }
};

export default getTeamInfo;
