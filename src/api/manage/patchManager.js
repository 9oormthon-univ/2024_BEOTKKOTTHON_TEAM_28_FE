import { AxiosError } from 'axios';
import axiosInstance from '..';

const patchManager = async (id, memberId) => {
  try {
    const response = await axiosInstance.patch(`/teams/${id}/leader`, { memberId });
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default patchManager;
