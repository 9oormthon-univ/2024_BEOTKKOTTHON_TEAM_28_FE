import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from '../component/mypage';

import GardenList from '../component/mypage/ProjectList';
import { SortTooltipList } from '../component/common/mocules';
import { TabBar } from '../component/common/organisms';

const Tabs = ['참여 프로젝트'];

const SortType = ['전체', '완료한 프로젝트'];

const MyPage = () => {
  return (
    <main>
      <Flex gap='27px'>
        <Profile />
        <Flex direction='column' marginLeft='327px' w='922px' gap='100px'>
          <GardenPlot />
          <Box>
            <TabBar tabs={Tabs} />
            <SortTooltipList sorts={SortType} />
            <GardenList />
          </Box>
        </Flex>
      </Flex>
    </main>
  );
};

export default MyPage;
