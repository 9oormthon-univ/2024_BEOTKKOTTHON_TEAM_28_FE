import { Flex, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import text_logo from '../../../assets/text_logo.png';

const AuthBox = ({ children, mt, mb }) => {
  return (
    <Flex direction='column' p='24px' align='center' border='1px solid #CCD6E3' mt={mt} mb={mb}>
      <Image src='/favicon.ico' width='64px' height='64px' />
      <Image src={text_logo} width='175px' mt='12px' alt='스타트업밸리 로고' />
      {children}
    </Flex>
  );
};

AuthBox.propTypes = {
  children: PropTypes.node.isRequired,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

export default AuthBox;
