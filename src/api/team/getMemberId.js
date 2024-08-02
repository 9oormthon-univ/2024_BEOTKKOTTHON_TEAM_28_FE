import { AxiosError } from 'axios';
import axiosInstance from '..';

const getTeamsWithMemberId = async (memberId, teamId) => {
  try {
    const response = await axiosInstance.get(`/members/${memberId}/teams/${teamId}`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getTeamsWithMemberId;
