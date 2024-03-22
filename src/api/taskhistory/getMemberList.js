import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberList = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/members`);
    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberList;
