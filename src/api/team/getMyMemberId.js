import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMyMemberId = async (teamId) => {
  try {
    const response = await axiosInstance.get(`/teams/${teamId}/members/member-id`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMyMemberId;
