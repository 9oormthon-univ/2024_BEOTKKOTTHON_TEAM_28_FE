import { Footer, Header, Toast } from '../component/common/layout';

import PropTypes from 'prop-types';
import getUserInfo from '../api/dashboard/getUserInfo';
import { returnProfileImg } from '../lips/returnProfile';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useToastStore from '../stores/toastStore';
import useUserStore from '../stores/userStore';

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

    if (!['/login', '/', '/signup'].includes(currentPath)) {
      if (!accessToken) {
        navigate('/login');
      }
    }
  }, [accessToken, location.pathname, navigate]);

  return (
    <div>
      {isShowToast && <Toast />}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
