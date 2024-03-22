import { MemberList, TabBar } from '../component/common/organisms';
import { TaskItem, TeamProfile } from '../component/taskhistory';

import { Flex } from '@chakra-ui/react';
import { GardenPlot } from '../component/mypage';
import { getMemberScrum } from '../api/taskhistory';
import { useEffect } from 'react';
import { useState } from 'react';
import useUserStore from '../stores/userStore';

const Tabs = ['스크럼 타임라인', '참여 프로젝트'];

const TaskHistoryPage = () => {
  const [data, setData] = useState([]);
  const { userId } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberScrum(13);

      setData(response ?? []);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px'>
          <Flex direction='column' position='fixed' gap='92px'>
            <TeamProfile />
            <MemberList isWhite={true} />
          </Flex>
          <Flex direction='column' marginLeft='327px' w='922px' gap='86px'>
            <GardenPlot id={userId} />
            <Flex direction='column' gap='32px'>
              <TabBar tabs={Tabs} />
              <Flex direction='column' gap='24px'>
                {data?.map((el) => (
                  <TaskItem
                    key={el.id}
                    content={el.content}
                    startAt={el.startAt}
                    endAt={el.endAt}
                    workList={el.workList}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default TaskHistoryPage;
