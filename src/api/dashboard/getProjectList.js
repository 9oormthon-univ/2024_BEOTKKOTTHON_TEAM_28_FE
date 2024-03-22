import { AxiosError } from 'axios';
import axiosInstance from '..';

const getProjectList = async () => {
  try {
    const response = await axiosInstance.get(`/teams/members/6/retrieve-list`);
    return response.data.data.projectList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getProjectList;
