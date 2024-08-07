import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from './components';

import GardenList from './components/ProjectList';
import { TabBar } from '../../components/organisms';
import { useState } from 'react';
import useUserStore from '../../stores/userStore';

const Tabs = ['참여 프로젝트'];

const SortType = ['전체', '완료한 프로젝트'];

const ReceivedTab = ['all', 'complete'];

const MyPage = () => {
  const { userId } = useUserStore();
  const [sort, setSort] = useState('all');

  const [selectedSort, setSelectedSort] = useState('전체');

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex justify='center'>
        <Flex gap='25px' mt='68px'>
          <Profile />
          <Flex direction='column' w='922px' gap='86px'>
            <GardenPlot id={userId ?? 0} />
            <Box>
              <TabBar tabs={Tabs} />
              <Box direction='column' marginY='20px'>
                <Flex gap='12px'>
                  {SortType.map((sort) => (
                    <Box
                      onClick={() => {
                        setSort(ReceivedTab[SortType.indexOf(sort)]);
                        setSelectedSort(sort);
                      }}
                      key={sort}
                      border={selectedSort === sort ? '1px solid #475569' : '1px solid #94A3B8'}
                      color={selectedSort === sort ? '#475569' : '#94A3B8'}
                      borderRadius='999px'
                      paddingY='6px'
                      paddingX='16px'
                      colorscheme='blue'
                      cursor='pointer'
                    >
                      {sort}
                    </Box>
                  ))}
                </Flex>
              </Box>
              <GardenList sort={sort} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default MyPage;
