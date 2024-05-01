import { AxiosError } from 'axios';
import axiosInstance from '..';

const postLogout = async () => {
  try {
    const response = await axiosInstance.post(
      '/auth/sign-out',
      {},
      {
        withCredentials: true,
      },
    );

    console.log('로그아웃');

    return response.data.success;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default postLogout;
