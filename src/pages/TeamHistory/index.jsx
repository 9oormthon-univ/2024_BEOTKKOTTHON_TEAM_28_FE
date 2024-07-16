import { MemberList, TabBar } from '../../components/organisms';
import { TaskItem, TeamProfile } from './components';
import { getMemberList, getMemberScrum } from '../../api/taskhistory';

import { Flex } from '@chakra-ui/react';
import GardenPlot from '../MyDashboard/components/GardenPlot';
import NonData from '../../components/molecules/NonData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Tabs = ['백로그 타임라인'];

const TaskHistoryPage = () => {
  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberScrum(id, currentUser?.memberId);

      setData(response ?? []);
    };

    fetchData();
  }, [currentUser, id]);

  const handleCurrentUser = ({ name, profile, part, memberId }) => {
    setCurrentUser({ name, profile, part, memberId });
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
            <Flex direction='column' gap='32px'>
              <TabBar tabs={Tabs} />
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
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default TaskHistoryPage;
