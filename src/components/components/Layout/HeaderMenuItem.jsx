import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const HeaderMenuItem = ({ children, ...props }) => {
  return (
    <Button
      className='Body-xl smNone'
      background='transparent'
      sx={{
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28px',
        letterSpacing: '0.2px',
      }}
      _hover={{
        textDecoration: 'none',
        background: 'transparent !important',
        color: '#047857',
      }}
      _focus={{ bg: 'transparent' }}
      {...props}
    >
      {children}
    </Button>
  );
};

HeaderMenuItem.propTypes = {
  children: PropTypes.element,
};

export default HeaderMenuItem;
