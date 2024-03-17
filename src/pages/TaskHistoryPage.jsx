import { MemberList, TabBar } from '../component/common/organisms';
import { TaskItem, TeamProfile } from '../component/taskhistory';

import { Flex } from '@chakra-ui/react';
import { GardenPlot } from '../component/mypage';

const Tabs = ['스크럼 타임라인', '참여 프로젝트'];

const TaskHistoryPage = () => {
  return (
    <main>
      <Flex gap='27px'>
        <Flex direction='column' position='fixed' gap='92px'>
          <TeamProfile />
          <MemberList />
        </Flex>
        <Flex direction='column' marginLeft='327px' w='922px' gap='100px'>
          <GardenPlot />
          <Flex direction='column' gap='32px'>
            <TabBar tabs={Tabs} />
            <Flex direction='column' gap='24px'>
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default TaskHistoryPage;