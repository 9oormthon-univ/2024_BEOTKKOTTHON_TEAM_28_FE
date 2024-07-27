import { AxiosError } from 'axios';
import axiosInstance from '..';

const getTeamMemberStatus = async (teamsId) => {
  try {
    const response = await axiosInstance.get(`/teams/${teamsId}/works/status`);

    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getTeamMemberStatus;
