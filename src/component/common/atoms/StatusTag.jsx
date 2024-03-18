import { Box, Button, Flex } from '@chakra-ui/react';

const StatusTag = () => {
  return (
    <Button border='2px solid #059669' color='brandBold' paddingX='16px' paddingY='8px'>
      <Flex gap='8px' alignItems='center'>
        <Box>진행 중</Box>
        <Box background='success' width='8px' height='8px' borderRadius='50%' />
      </Flex>
    </Button>
  );
};

export default StatusTag;
