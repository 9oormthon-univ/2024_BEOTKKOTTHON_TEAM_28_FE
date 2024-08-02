import { Box } from '@chakra-ui/react';
import { service_guide } from '../../../constants';

const FloatBox = () => {
  return (
    <Box
      className='SubHead-xl'
      position='fixed'
      left='50%'
      transform='translateX(-50%)'
      bottom='27px'
      padding='11px 20px'
      width='260px'
      borderRadius='1066665.75px'
      border='1px solid #CCD6E3'
      background='#FFF'
      boxShadow='0px 0px 12px 0px rgba(0, 0, 0, 0.10), 0px 0px 16px 0px rgba(0, 0, 0, 0.05)'
      textAlign='center'
      cursor='pointer'
    >
      <a href={service_guide}>저희 서비스가 처음이신가요?</a>
    </Box>
  );
};

export default FloatBox;
