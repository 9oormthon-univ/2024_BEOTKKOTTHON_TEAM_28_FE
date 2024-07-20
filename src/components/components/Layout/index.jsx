import Paths, { ProtectedPaths } from '../../../constants/Paths';

import Footer from './Footer';
import Header from './Header';
import PropTypes from 'prop-types';
import Toast from './Toast';
import getUserInfo from '../../../api/dashboard/getUserInfo';
import { isDev } from '../../../constants/env';
import { returnProfileImg } from '../../../lips/returnProfile';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useToastStore from '../../../stores/toastStore';
import useUserStore from '../../../stores/userStore';

const Layout = ({ children }) => {
  const location = useLocation();
  const { isShowToast } = useToastStore();

  const { handleProfile } = useUserStore();

  const cookies = document.cookie.split(';');

  let accessToken = '';
  cookies.forEach((cookie) => {
    if (cookie.trim().startsWith('access_token=')) {
      accessToken = cookie.trim().substring('access_token='.length);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) return;
      const response = await getUserInfo();

      handleProfile({
        profile: returnProfileImg(response.profileImage),
        userId: response.memberId,
        userName: response.nickname,
      });
    };

    fetchData();
  }, [handleProfile, accessToken]);

  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    if (isDev) return;
    if (!accessToken && ProtectedPaths.includes(currentPath)) {
      navigate(Paths.Login);
    }
  }, [accessToken, location.pathname, navigate]);

  return (
    <div>
      <Header isLogin={!!accessToken} />
      {isShowToast && <Toast />}
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
