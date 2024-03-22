import { AxiosError } from 'axios';
import axiosInstance from '..';

const getProjectList = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/members/${id}/retrieve-list?sort=progress`);
    return response.data.data.projectList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getProjectList;
