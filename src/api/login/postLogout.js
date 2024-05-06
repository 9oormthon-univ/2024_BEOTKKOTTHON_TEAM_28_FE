import { AxiosError } from 'axios';
import axiosInstance from '..';

const postLogout = async () => {
  try {
    const response = await axiosInstance.post(
      '/users/sign-out',
      {},
      {
        withCredentials: true,
      },
    );

    console.log(response.data);
    console.log(response.data.success);
    return response.data.success;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postLogout;
