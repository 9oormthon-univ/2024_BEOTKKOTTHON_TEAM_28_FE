import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberRanking = async (teamsId) => {
  try {
    const response = await axiosInstance.get(`/teams/${teamsId}/works/ranking`);

    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberRanking;
