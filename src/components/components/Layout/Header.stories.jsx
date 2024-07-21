import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
};

export const Login = {
  args: {
    isLogin: true,
  },
};

export const Logout = {
  args: {
    isLogin: false,
  },
};
