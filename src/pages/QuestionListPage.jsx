import { Box, Flex } from '@chakra-ui/react';
import { FormBox, ProjectList } from '../component/questionlist';

import { SortTooltipList } from '../component/common/mocules';
import { TabBar } from '../component/common/organisms';
import WorkItem from '../component/questionlist/WorkItem';
import { getProjectList } from '../api/common';
import getReceivedQuestion from '../api/questionlist/getReceivedQuestion';
import { useEffect } from 'react';
import { useState } from 'react';
import useUserStore from '../stores/userStore';

const Tabs = ['받은 요청', '전달한 요청'];

const SortType = ['전체', '나를 멘션', '직무 관련 질문', '완료된 요청'];

const QuestionListPage = () => {
  const [currentTeam, setCurrentTeam] = useState({ teamName: '', teamId: 0 });
  const [data, setData] = useState([]);

  const { userName } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReceivedQuestion();
      setData(response);
    };

    fetchData();
  }, []);

  const handleCurrentTeam = ({ teamName, teamId }) => {
    setCurrentTeam({ teamName, teamId });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList();
      setCurrentTeam({
        teamName: response.progressingProjectList[0].name,
        teamId: response.progressingProjectList[0].id,
      });
    };

    fetchData();
  }, []);

  return (
    <main>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px'>
          <ProjectList handleCurrentTeam={handleCurrentTeam} />
          <Flex direction='column' marginLeft='327px' w='922px' gap='32px'>
            <FormBox />
            <Box className='Display-md'>
              {currentTeam.teamName ?? 'TeamName'} | {userName ?? 'User'}님의 작업요청
            </Box>
            <Flex direction='column' gap='24px'>
              <TabBar tabs={Tabs} />
              <SortTooltipList sorts={SortType} />
            </Flex>
            <Box className='Display-md'>다른 팀원은 어떤 일을 했을까요?</Box>
            <Flex direction='column'>
              {data?.map((el) => (
                <WorkItem key={el.id} />
              ))}
              <WorkItem />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default QuestionListPage;
