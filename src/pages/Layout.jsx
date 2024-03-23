import { Footer, Header, Toast } from '../component/common/layout';

import PropTypes from 'prop-types';
import getUserInfo from '../api/dashboard/getUserInfo';
import { returnProfileImg } from '../lips/returnProfile';
import { useEffect } from 'react';
import useToastStore from '../stores/toastStore';
import useUserStore from '../stores/userStore';

const Layout = ({ children }) => {
  const { isShowToast } = useToastStore();

  const { handleProfile } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfo();

      handleProfile({
        profile: returnProfileImg(response.profileImage),
        userId: response.memberId,
        userName: response.nickname,
      });
    };

    fetchData();
  }, [handleProfile]);

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
