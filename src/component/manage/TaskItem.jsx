import { Box, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { useState } from 'react';
import useToastStore from '../../stores/toastStore';

const TaskItem = ({ content, startAt, endAt }) => {
  const [isToggled, setIsToggled] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);

  const { handleShowToastMessage } = useToastStore();
  console.log(handleShowToastMessage);

  const start = new Date(startAt);
  const end = new Date(endAt);

  const timeDiffInMilliseconds = end - start;
  const timeDiffInMinutes = timeDiffInMilliseconds / (1000 * 60);

  const hours = Math.floor((timeDiffInMinutes % (24 * 60)) / 60);
  const minutes = Math.floor(timeDiffInMinutes % 60);

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
        <Box className='SubHead-xl'>
          {start.getMonth() + 1}.{start.getDate()} {start.getHours()}:{start.getMinutes()} ~{' '}
          {end.getMonth() + 1}.{end.getDate()} {end.getHours()}:{end.getMinutes()}
        </Box>
        <Box className='Body-lg' color='brandBold'>
          {hours}시간 {minutes}분
        </Box>
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end'>
          <Box width='full'>{content}</Box>
          {/* TODO {isEditing ? (
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
          )} */}
        </Flex>
      )}
    </Flex>
  );
};

TaskItem.propTypes = {
  content: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
};

export default TaskItem;
