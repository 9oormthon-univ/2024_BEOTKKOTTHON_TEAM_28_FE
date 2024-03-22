import { AxiosError } from 'axios';
import axiosInstance from '..';

const getProjectList = async () => {
  try {
    const response = await axiosInstance.get(`/teams`);

    return response.data.data.progressingProjectList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getProjectList;
