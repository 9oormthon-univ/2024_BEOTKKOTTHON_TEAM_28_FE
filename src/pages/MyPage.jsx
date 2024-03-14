import { Box, Flex } from '@chakra-ui/react';

import { Profile } from '../component/mypage';

const MyPage = () => {
  return (
    <main>
      <Box>
        <Flex>
          <Profile />
        </Flex>
      </Box>
    </main>
  );
};

export default MyPage;
