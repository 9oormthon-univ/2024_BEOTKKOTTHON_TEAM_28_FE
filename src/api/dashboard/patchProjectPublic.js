import { AxiosError } from 'axios';
import axiosInstance from '..';

const patchProjectPublic = async (memberId) => {
  try {
    const response = await axiosInstance.patch(`/members/${memberId}`);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default patchProjectPublic;
