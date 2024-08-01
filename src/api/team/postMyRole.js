import { AxiosError } from 'axios';
import axiosInstance from '..';

const postMyRole = async (teamId, content) => {
  try {
    const response = await axiosInstance.patch(`/teams/${teamId}/retrospection`, {
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

export default postMyRole;
