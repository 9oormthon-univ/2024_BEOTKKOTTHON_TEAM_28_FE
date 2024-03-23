import { AxiosError } from 'axios';
import axiosInstance from '..';

const patchDateChange = async (memberId, worksId, data) => {
  try {
    const response = await axiosInstance.patch(`/api/members/${memberId}/works/${worksId}`, data);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default patchDateChange;
