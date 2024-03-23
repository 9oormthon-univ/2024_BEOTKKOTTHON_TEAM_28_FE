import { AxiosError } from 'axios';
import axiosInstance from '..';

const getMemberScrum = async (id, memberId) => {
  try {
    const response = await axiosInstance.get(
      `/teams/${id}/scrums${memberId ? `?target=${memberId}` : ''}`,
    );
    return response.data.data.scrumList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getMemberScrum;
