import CheckIcon from '../../../assets/icons/CheckIcon';
import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import useToastStore from '../../../stores/toastStore';

const Toast = () => {
  const { toastMessage, handleHideToast } = useToastStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleHideToast();
    }, 2000);

    return () => clearTimeout(timer);
  }, [handleHideToast]);

  return (
    <Flex
      zIndex={999}
      position='fixed'
      top='100px'
      right='50%'
      transform='translateX(50%)'
      paddingY='12px'
      paddingX='16px'
      backgroundColor='#1E293B'
      borderRadius={12}
      color='#FFFFFF'
      gap='8px'
      boxShadow='0px 4px 24px 0px rgba(0, 0, 0, 0.25), 0px 0px 35px 0px rgba(0, 0, 0, 0.12)'
      onClick={handleHideToast}
    >
      <CheckIcon />

      {toastMessage}
    </Flex>
  );
};

export default Toast;
