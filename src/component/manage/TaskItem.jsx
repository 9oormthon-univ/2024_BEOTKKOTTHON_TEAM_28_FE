import { Box, Button, Flex } from '@chakra-ui/react';

import { useState } from 'react';
import useToastStore from '../../stores/toastStore';

const TaskItem = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { handleShowToastMessage } = useToastStore();
  console.log(handleShowToastMessage);

  return (
    <Flex
      direction='column'
      gap='20px'
      paddingX='24px'
      paddingY='16px'
      background='gray.100'
      borderRadius='8px'
      onClick={() => {
        setIsToggled((prev) => !prev);
      }}
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
          {isEditing ? (
            <Button
              paddingX='75px'
              paddingY='13px'
              background='brand'
              color='white'
              _hover='brand'
              onClick={(event) => {
                event.stopPropagation();
                handleShowToastMessage('업무 시간 수정완료!');
                setIsEditing(false);
              }}
            >
              저장하기
            </Button>
          ) : (
            <Button
              paddingX='75px'
              paddingY='13px'
              border='1px solid black'
              onClick={(event) => {
                event.stopPropagation();
                setIsEditing(true);
              }}
            >
              수정하기
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default TaskItem;
