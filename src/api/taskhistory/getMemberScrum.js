import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberScrum = async (id) => {
  try {
    const response = await axiosInstance.get(`/members/${id}/scrums`);
    return response.data.data.scrumList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberScrum;
