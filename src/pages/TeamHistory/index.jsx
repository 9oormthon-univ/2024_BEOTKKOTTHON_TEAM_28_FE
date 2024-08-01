import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../../components/organisms';
import { TaskItem, TeamProfile } from './components';
import { getMemberList, getMemberScrum } from '../../api/taskhistory';

import GardenList from '../MyDashboard/components/ProjectList';
import GardenPlot from '../MyDashboard/components/GardenPlot';
import NonData from '../../components/molecules/NonData';
import { SortTooltipList } from '../../components/molecules';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Tabs = ['백로그 타임라인', '참여 프로젝트'];

const Sorts = [
  { label: '전체', value: 'all' },
  { label: '완료한 프로젝트', value: 'complete' },
];

const TaskHistoryPage = () => {
  const [currentTab, setCurrentTab] = useState(Tabs[0]);
  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState([]);

  const { id } = useParams();

  const [currentSort, setCurrentSort] = useState(Sorts[0]);

  const handleCurrentSort = (sort) => {
    setCurrentSort(sort);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberScrum(id, currentUser?.memberId);

      setData(response ?? []);
    };

    fetchData();
  }, [currentUser, id]);

  const handleCurrentUser = ({ name, profile, part, memberId }) => {
    setCurrentUser({ name, profile, part, memberId });
    setCurrentTab(Tabs[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberList(id);

      setCurrentUser({
        name: response?.memberList[0].nickname,
        profile: response?.memberList[0].profileImage,
        part: response?.memberList[0].part,
        memberId: response?.memberList[0].memberId,
      });
    };

    fetchData();
  }, [id]);

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex justify='center'>
        <Flex mt='68px' gap='33.93px'>
          <Flex direction='column' gap='92px'>
            <TeamProfile />
            <MemberList
              isWhite={true}
              currentUser={currentUser}
              handleCurrentUser={handleCurrentUser}
            />
          </Flex>
          <Flex direction='column' w='922px' gap='86px'>
            <GardenPlot name={currentUser?.name} id={Number(currentUser?.memberId)} />
            <Flex direction='column' gap={currentTab === Tabs[0] ? '32px' : ''}>
              <TabBar
                tabs={Tabs}
                currentTap={currentTab}
                handleCurrentTap={(index) => {
                  setCurrentTab(index);
                }}
              />
              {currentTab === Tabs[0] ? (
                <Flex direction='column' gap='24px'>
                  {data.length === 0 ? (
                    <NonData extraText='서버에 디스코드 봇을 추가하여 팀원들과 소통해보세요!' />
                  ) : (
                    data.map((el) => (
                      <TaskItem
                        currentUser={currentUser}
                        key={el.id}
                        content={el.content}
                        startAt={el.startAt}
                        endAt={el.endAt}
                        workList={el.workList}
                      />
                    ))
                  )}
                </Flex>
              ) : (
                <>
                  <Box direction='column' marginY='20px'>
                    <SortTooltipList
                      sorts={Sorts}
                      currentSort={currentSort}
                      handleCurrentSort={handleCurrentSort}
                    />
                  </Box>
                  <GardenList sort={currentSort.value} memberId={currentUser.memberId} />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default TaskHistoryPage;
