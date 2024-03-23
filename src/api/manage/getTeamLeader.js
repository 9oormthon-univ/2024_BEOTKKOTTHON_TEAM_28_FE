import { AxiosError } from 'axios';
import axiosInstance from '..';

const getTeamLeader = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/leader`);
    return response.data.data.memberList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getTeamLeader;
