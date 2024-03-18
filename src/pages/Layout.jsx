import { Footer, Header } from '../component/common/layout';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Flex direction='column' minHeight='100vh'>
      <Header />
      <Flex as='main' flex='1' justify='center' align='center' direction='column'>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
