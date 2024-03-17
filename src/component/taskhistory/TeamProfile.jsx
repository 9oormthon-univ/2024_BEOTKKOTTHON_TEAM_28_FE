import { Box, Button, Flex } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const TeamProfile = () => {
  return (
    <Box w='292px' top='50px'>
      <img src={tomato} alt={tomato} width={120} height={120} />
      <Box className='SubHead-xl' marginTop='19px' marginBottom='13px'>
        팀 이름
      </Box>
      <Flex>
        <Box>팀 개설일</Box>
        <Box>2024.03.01</Box>
      </Flex>
      <Button>프로젝트 팀 변경하기</Button>
    </Box>
  );
};

export default TeamProfile;
