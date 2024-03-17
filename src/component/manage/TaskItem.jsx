import { Box, Button, Flex } from '@chakra-ui/react';

const TaskItem = ({ isToggled }) => {
  return (
    <Flex
      direction='column'
      gap='20px'
      paddingX='24px'
      paddingY='16px'
      background='gray.100'
      borderRadius='8px'
    >
      <Flex width='100%' justifyContent='space-between' alignItems='center'>
        <Box className='SubHead-xl'>03.18 12:00 ~ 03.19 13:00</Box>
        <Box className='Body-lg' color='brandBold'>
          46시간 34분
        </Box>
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end'>
          <Box>
            업무 종료 내용입니다.업무 종료 내용입니다.업무 종료 내용입니다.업무 종료 내용입니다.업무
            종료 내용입니다.업무 종료 내용입니다.업무 종료 내용입니다.업무 종료 내용입니다.
          </Box>
          <Button paddingX='75px' paddingY='13px' border='1px solid black'>
            수정하기
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

TaskItem.propTypes = {
  isToggled: Boolean,
};

export default TaskItem;
