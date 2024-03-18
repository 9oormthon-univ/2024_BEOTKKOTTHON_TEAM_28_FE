import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const AuthBox = ({ children, mt, mb }) => {
  return (
    <Flex direction='column' p='24px' align='center' border='1px solid #CCD6E3' mt={mt} mb={mb}>
      <div>로고</div>
      <Text>스타트업 밸리</Text>
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
