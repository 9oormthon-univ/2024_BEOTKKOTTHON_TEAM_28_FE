import { AxiosError } from 'axios';
import axiosInstance from '..';

const postDiscordOAuth = async (code) => {
  try {
    await axiosInstance.post(
      '/discord',
      { code },
      {
        withCredentials: true,
      },
    );
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error('존재하지 않는 계정입니다');
    }
  }
};

export default postDiscordOAuth;
