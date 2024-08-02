import { Flex, Box, Button } from '@chakra-ui/react';

const ErrorModal = () => {
  return (
    <Flex
      p='32px'
      display='flex'
      flexDirection='column'
      w='532px'
      gap='36px'
      border='1px solid #059669'
      borderRadius='8px'
      background='#FFF'
      justifyContent='center'
      alignItems='center'
    >
      <Flex display='flex' flexDirection='column'>
        <Box className='Display-sm' color='brandBold'>
          변경사항을 저장하지 않으시나요?
        </Box>
        <Box mt='12px' textAlign='center' color='tertiary'>
          현재까지의 변경사항을 저장하지 않고 <br />
          나의 대시보드로 돌아가시나요?
        </Box>
      </Flex>
      <Flex gap='12px'>
        <Button w='228px' h='50px' background='#8C98A9' color='white'>
          아니오
        </Button>
        <Button w='228px' h='50px' background='brand' color='white'>
          네
        </Button>
      </Flex>
    </Flex>
  );
};

export default ErrorModal;
