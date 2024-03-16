import { Box, Flex } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const ProfileEditModalUserItem = () => {
  return (
    <Box>
      <Flex>
        <img src={tomato} alt='프로필 이미지' width='48px' />
        <Flex>
          <Box>김새싹</Box>
          <Box>팀 리더</Box>
        </Flex>
      </Flex>
      <Box>현재 리더입니다</Box>
    </Box>
  );
};

export default ProfileEditModalUserItem;
