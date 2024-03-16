import { Flex } from '@chakra-ui/react';
import tomato from '../../../assets/tomato.png';

const Note = () => {
  return (
    <Flex gap='16px'>
      <img src={tomato} alt='안재윤의 작업' width='64px' />
      <Flex
        paddingY='12px'
        paddingX='16px'
        width='100%'
        alignItems='center'
        border='1px solid #CCD6E3'
        borderRadius='8px'
      >
        스타트업 밸리에서 오늘은 어떤 작업을 진행하셨나요?
      </Flex>
    </Flex>
  );
};

export default Note;
