import { Button } from '@chakra-ui/react';
import Paths from '../../../constants/Paths';
import PropTypes from 'prop-types';

const HeaderMenuItem = ({ children, ...props }) => {
  const currentPath = window.location.pathname;

  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent,
    ) && window.innerWidth <= 768;

  if (isMobile) return;

  return (
    <Button
      visibility={
        currentPath === Paths.Login || currentPath === Paths.Register ? 'hidden' : 'visible'
      }
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
