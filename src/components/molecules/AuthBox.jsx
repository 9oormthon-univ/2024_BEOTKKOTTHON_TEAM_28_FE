import { Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import text_logo from '../../assets/text_logo.png';

const AuthBox = ({ children, mt, mb }) => {
  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent,
    ) && window.innerWidth <= 768;

  return (
    <Flex
      direction='column'
      justifyContent={isMobile ? 'center' : 'normal'}
      height={isMobile ? '520px' : ''}
      p='24px'
      align='center'
      border={isMobile ? '' : '1px solid #CCD6E3'}
      mt={isMobile ? '-20px' : mt}
      mb={isMobile ? '' : mb}
      borderRadius='8px'
      background={isMobile ? '#F6F6F8' : ''}
    >
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
