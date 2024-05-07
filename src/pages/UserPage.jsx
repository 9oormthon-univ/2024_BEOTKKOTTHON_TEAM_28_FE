import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from '../component/mypage';

import GardenList from '../component/mypage/ProjectList';
import { SortTooltipList } from '../component/common/mocules';
import { TabBar } from '../component/common/organisms';
import { useParams } from 'react-router-dom';

const Tabs = ['참여 프로젝트'];

const SortType = ['전체', '완료한 프로젝트'];

const UserPage = () => {
  const { id } = useParams();
  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px'>
          <Profile isOther={true} />
          <Flex direction='column' w='922px' gap='86px'>
            <GardenPlot id={id} />
            <Box>
              <TabBar tabs={Tabs} />
              <Box direction='column' marginY='20px'>
                <SortTooltipList sorts={SortType} />
              </Box>
              <GardenList />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default UserPage;
