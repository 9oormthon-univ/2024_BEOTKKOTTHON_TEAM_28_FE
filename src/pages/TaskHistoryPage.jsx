import { MemberList, TabBar } from '../component/common/organisms';
import { TaskItem, TeamProfile } from '../component/taskhistory';
import { getMemberList, getMemberScrum } from '../api/taskhistory';

import { Flex } from '@chakra-ui/react';
import { GardenPlot } from '../component/mypage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../stores/userStore';

const Tabs = ['스크럼 타임라인'];

const TaskHistoryPage = () => {
  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState([]);
  const { userId } = useUserStore();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser?.memberId) return;
      const response = await getMemberScrum(currentUser.memberId);

      setData(response ?? []);
    };

    fetchData();
  }, [currentUser]);

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
    <main>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px'>
          <Flex direction='column' position='fixed' gap='92px'>
            <TeamProfile />
            <MemberList
              isWhite={true}
              currentUser={currentUser}
              handleCurrentUser={handleCurrentUser}
            />
          </Flex>
          <Flex direction='column' marginLeft='327px' w='922px' gap='86px'>
            <GardenPlot id={userId} />
            <Flex direction='column' gap='32px'>
              <TabBar tabs={Tabs} />
              <Flex direction='column' gap='24px'>
                {data.map((el) => (
                  <TaskItem
                    currentUser={currentUser}
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
