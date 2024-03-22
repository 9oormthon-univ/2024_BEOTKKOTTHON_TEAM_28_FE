import { AxiosError } from 'axios';
import axiosInstance from '..';

const getGardenData = async (membersId) => {
  try {
    const response = await axiosInstance.get(`/members/${membersId}/works/measure-one`);

    return response.data.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getGardenData;
