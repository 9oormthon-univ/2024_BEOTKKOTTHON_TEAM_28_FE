import { Footer, Header, Toast } from '../component/common/layout';
import PropTypes from 'prop-types';
import useToastStore from '../stores/toastStore';
// import { Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  const { isShowToast } = useToastStore();
  return (
    // <Flex direction='column' minHeight='100vh'>
    <body>
      {isShowToast && <Toast />}
      <Header />
      {/* <Flex as='main' flex='1' justify='center' align='center' direction='column'> */}
      {children}
      {/* </Flex> */}
      <Footer />
    </body>
    // </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
