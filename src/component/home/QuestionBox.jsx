import { Box, Button, Flex, List } from '@chakra-ui/react';

import { LeftContainer } from '../common/atoms';
import tomato from '../../assets/tomato.png';

const QuestionBox = () => {
  return (
    <LeftContainer title='답변을 기다리는 요청사항'>
      <List>
        <Flex direction='column' gap='12px' marginBottom='12px'>
          <Flex gap='8px'>
            <img src={tomato} alt='안재윤의 작업' width='48px' />
            <Flex direction='column'>
              <Box className='SubHead-lg'>질문 제목</Box>
              <Box className='SubHead-md'>요청 직군</Box>
            </Flex>
          </Flex>
          <Flex gap='8px'>
            <img src={tomato} alt='안재윤의 작업' width='48px' />
            <Flex direction='column'>
              <Box className='SubHead-lg'>질문 제목</Box>
              <Box className='SubHead-md'>요청 직군</Box>
            </Flex>
          </Flex>
        </Flex>
        <Button width='100%'>더보기</Button>
      </List>
    </LeftContainer>
  );
};

export default QuestionBox;
