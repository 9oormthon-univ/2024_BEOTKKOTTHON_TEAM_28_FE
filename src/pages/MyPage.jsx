import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from '../component/mypage';

import GardenList from '../component/mypage/ProjectList';
import { TabBar } from '../component/common/organisms';

const Tabs = ['참여 프로젝트'];

// const SortType = ['전체', '완료한 프로젝트'];

const MyPage = () => {
  return (
    <main>
      <Flex gap='27px'>
        <Profile />
        <Box w='922px'>
          <GardenPlot />
          <TabBar tabs={Tabs} />
          <GardenList />
        </Box>
      </Flex>
    </main>
  );
};

export default MyPage;
