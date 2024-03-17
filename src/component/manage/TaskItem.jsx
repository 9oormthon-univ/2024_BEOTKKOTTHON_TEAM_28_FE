import { Box, Flex } from '@chakra-ui/react';

const TaskItem = () => {
  return (
    <Flex
      justifyContent='space-between'
      gap='20px'
      paddingX='24px'
      paddingY='16px'
      background='gray.100'
      borderRadius='8px'
    >
      <Box className='SubHead-xl'>03.18 12:00 ~ 03.19 13:00</Box>
      <Box className='Body-lg' color='brandBold'>
        46시간 34분
      </Box>
    </Flex>
  );
};

export default TaskItem;
