import { Box, Flex } from '@chakra-ui/react';

import checkSVG from '../../../assets/check.svg';
import { useEffect } from 'react';
import useToastStore from '../../../stores/toastStore';

const Toast = () => {
  const { toastMessage, handleHideToast } = useToastStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleHideToast();
    }, 1500);

    return () => clearTimeout(timer);
  }, [handleHideToast]);

  return (
    <Flex position='fixed' top='100' right='200' left='200' bottom='200' justifyContent='center'>
      <Flex
        padding='20px'
        height='52px'
        color='white'
        background='#1E293B'
        alignItems='center'
        gap='10px'
        borderRadius='12px'
        boxShadow='0px 0px 35px 0px rgba(0, 0, 0, 0.12), 0px 4px 24px 0px rgba(0, 0, 0, 0.25)'
        onClick={handleHideToast}
      >
        <img src={checkSVG} alt={`${toastMessage} 메시지`} />
        <Box className='SubHead-xl'>{toastMessage}</Box>
      </Flex>
    </Flex>
  );
};

export default Toast;
