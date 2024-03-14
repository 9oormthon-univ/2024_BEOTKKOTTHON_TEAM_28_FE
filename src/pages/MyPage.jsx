import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from '../component/mypage';

import GardenList from '../component/mypage/ProjectList';
import { TabBar } from '../component/common/organisms';

const MyPage = () => {
  return (
    <main>
      <Flex>
        <Profile />
        <Box>
          <TabBar />
          <GardenPlot />
          <GardenList />
        </Box>
      </Flex>
    </main>
  );
};

export default MyPage;
