import { AxiosError } from 'axios';
import axiosInstance from '..';

const getUserLogin = async () => {
  try {
    const response = await axiosInstance.post(`/api/auth/sign-in`, {
      serial_id: 'ahyeon0312', // 디스코드 아이디
      password: '1234', // 비밀번호
    });
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getUserLogin;
