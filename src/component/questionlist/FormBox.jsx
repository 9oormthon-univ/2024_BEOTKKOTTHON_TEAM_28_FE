import { Button, Flex, Image } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const FormBox = () => {
  return (
    <Flex gap='16px'>
      <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
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
      <Button
        className='SubHead-xl'
        width='116px'
        height='full'
        paddingX='16px'
        color='white'
        background='#059669'
      >
        요청 남기기
      </Button>
    </Flex>
  );
};

export default FormBox;
