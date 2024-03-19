import { Footer, Header, Toast } from '../component/common/layout';
import PropTypes from 'prop-types';
import useToastStore from '../stores/toastStore';

const Layout = ({ children }) => {
  const { isShowToast } = useToastStore();
  return (
    <body>
      {isShowToast && <Toast />}
      <Header />
      {children}
      <Footer />
    </body>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
