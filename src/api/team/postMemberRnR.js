import { AxiosError } from 'axios';
import axiosInstance from '..';

const postMemberRnR = async (teamId, memberId, content) => {
  try {
    const response = await axiosInstance.post(`/teams/${teamId}/peer-review`, {
      memberId,
      content,
    });
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postMemberRnR;
