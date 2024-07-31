import { Box, Flex } from '@chakra-ui/react';
import { GardenPlot, Profile } from '../MyDashboard/components';

import GardenList from '../MyDashboard/components/ProjectList';
import { SortTooltipList } from '../../components/molecules';
import { TabBar } from '../../components/organisms';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Tabs = ['참여 프로젝트'];

const Sorts = [
  { label: '전체', value: 'all' },
  { label: '완료한 프로젝트', value: 'complete' },
];

const UserPage = () => {
  const { id } = useParams();
  const [currentSort, setCurrentSort] = useState(Sorts[0]);

  const handleCurrentSort = (sort) => {
    setCurrentSort(sort);
  };

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
                <SortTooltipList
                  sorts={Sorts}
                  currentSort={currentSort}
                  handleCurrentSort={handleCurrentSort}
                />
              </Box>
              <GardenList sort={currentSort.value} memberId={id} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default UserPage;
