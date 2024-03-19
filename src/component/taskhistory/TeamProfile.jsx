import { Box, Button, Flex, Image } from '@chakra-ui/react';

import linkICON from '../../assets/link.png';
import tomato from '../../assets/tomato.png';

const TeamProfile = () => {
  return (
    <Flex gap='4px' direction='column' w='292px' top='50px'>
      <Image src={tomato} alt='프로필' width='120px' />
      <Flex
        className='SubHead-xl'
        marginTop='19px'
        marginBottom='13px'
        gap='10px'
        alignItems='center'
      >
        <Box>팀 이름</Box>
        <Image src={linkICON} alt='프로필' width='20px' />
      </Flex>
      <Flex gap='8px' alignItems='center'>
        <Box color='primary' background='#E0E7EE' paddingX='8px' paddingY='4px' borderRadius='14px'>
          팀 개설일
        </Box>
        <Box>2024.03.01</Box>
      </Flex>
      <Button variant='grayWhite' width='full'>
        프로젝트 팀 변경하기
      </Button>
    </Flex>
  );
};

export default TeamProfile;
