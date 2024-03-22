import { Button, Flex, Image, Input } from '@chakra-ui/react';

import tomato from '../../../assets/tomato.png';

const Note = () => {
  return (
    <Flex gap='16px'>
      <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
      <Input
        paddingY='12px'
        paddingX='16px'
        width='100%'
        alignItems='center'
        border='1px solid #CCD6E3'
        borderRadius='8px'
        placeholder='스타트업 밸리에서 오늘은 어떤 작업을 진행하셨나요?'
      />
      <Button className='SubHead-xl' height='full' color='white' background='#059669'>
        작성
      </Button>
    </Flex>
  );
};

export default Note;
