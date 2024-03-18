import { Box, Button, Flex, Image } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const data = [
  { title: '질문 제목', part: '요청 직군' },
  { title: '질문 제목', part: '요청 직군' },
  { title: '질문 제목', part: '요청 직군' },
];

const QuestionBox = () => {
  return (
    <Flex direction='column' gap='16px'>
      <Box className='SubHead-xl'>답변을 기다리는 요청</Box>
      <Flex
        direction='column'
        gap='12px'
        width='276px'
        marginBottom='12px'
        background='#F0F2F4'
        padding='12px'
        borderRadius='12px'
      >
        {data.map((el) => {
          return (
            <Flex gap='8px' key={el.title}>
              <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
              <Flex direction='column'>
                <Box className='SubHead-lg'>질문 제목</Box>
                <Box className='SubHead-md' color='brandBold'>
                  요청 직군
                </Box>
              </Flex>
            </Flex>
          );
        })}
        <Button variant='greenGreen' width='100%'>
          더보기
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
