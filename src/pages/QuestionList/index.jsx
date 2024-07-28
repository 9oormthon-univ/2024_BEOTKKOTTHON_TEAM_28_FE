import { Box, Flex } from '@chakra-ui/react';

import NonData from '../../components/molecules/NonData';
import { ProjectList } from './components';
import { TabBar } from '../../components/organisms';
import WorkItem from './components/WorkItem';
import { getProjectList } from '../../api/common';
import { getReceivedQuestions } from '../../api/questionlist';
import getRequestedQuestion from '../../api/questionlist/getRequestedQuestion';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import useTeamStore from '../../stores/useTeamStore';
import useUserStore from '../../stores/userStore';

const Tabs = ['받은 요청', '전달한 요청'];
const ReceivedTab = ['all', 'pending', 'completed'];

const SortType = ['전체', '진행중인 요청', '완료된 요청'];

const QuestionListPage = () => {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get('teamId');

  const { teamId: storeTeamId } = useTeamStore();

  const [currentTeam, setCurrentTeam] = useState({ teamName: '', teamId: 0 });
  const [data, setData] = useState([]);
  const [currentTap, setCurrentTap] = useState('받은 요청');
  const [sort, setSort] = useState('all');
  const { userName } = useUserStore();

  const [selectedSort, setSelectedSort] = useState('전체');

  useEffect(() => {
    if (currentTeam.teamId === 0) return;

    const fetchData = async () => {
      let response;
      if (currentTap === '받은 요청') {
        response = await getReceivedQuestions(currentTeam.teamId, sort);
      } else {
        response = await getRequestedQuestion(currentTeam.teamId, sort);
      }
      setData(response);
    };

    fetchData();
  }, [currentTeam, sort, currentTap]);

  const handleCurrentTeam = ({ teamName, teamId }) => {
    setCurrentTeam({ teamName, teamId });
  };

  const handleSort = (index) => {
    setCurrentTap(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList();
      if (teamId !== undefined) {
        const matchedTeam = response.progressingProjectList.find((team) => team.id === +teamId);
        if (matchedTeam) {
          setCurrentTeam({
            teamName: matchedTeam.name,
            teamId: matchedTeam.id,
          });
        } else {
          setCurrentTeam({
            teamName: response.progressingProjectList[0].name,
            teamId: response.progressingProjectList[0].id,
          });
        }
      } else if (!teamId && storeTeamId) {
        const matchedTeam = response.progressingProjectList.find((team) => team.id === storeTeamId);
        if (matchedTeam) {
          setCurrentTeam({
            teamName: matchedTeam.name,
            teamId: matchedTeam.id,
          });
        } else {
          setCurrentTeam({
            teamName: response.progressingProjectList[0].name,
            teamId: response.progressingProjectList[0].id,
          });
        }
      } else {
        setCurrentTeam({
          teamName: response.progressingProjectList[0].name,
          teamId: response.progressingProjectList[0].id,
        });
      }
    };

    fetchData();
  }, [teamId, storeTeamId]);

  const handleReceivedTabClick = (newSort) => {
    setSort(ReceivedTab[SortType.indexOf(newSort)]);
    setSelectedSort(newSort);
  };

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px' alignItems='flex-start'>
          <ProjectList handleCurrentTeam={handleCurrentTeam} currentTeam={currentTeam} />
          <Flex direction='column' marginLeft='40.33px' w='922px' gap='32px'>
            {/* <FormBox /> */}
            <Box className='Display-md'>
              {currentTeam.teamName ?? 'TeamName'} | {userName ?? 'User'}님의 작업요청
            </Box>
            <Flex direction='column' gap='24px'>
              <TabBar tabs={Tabs} currentTap={currentTap} handleCurrentTap={handleSort} />
              <Flex gap='12px'>
                {SortType.map((sort) => (
                  <Box
                    onClick={() => {
                      setSort(ReceivedTab[SortType.indexOf(sort)]);
                      handleReceivedTabClick(sort);
                    }}
                    key={sort}
                    borderRadius='999px'
                    paddingY='6px'
                    paddingX='16px'
                    colorscheme='blue'
                    color={selectedSort === sort ? 'secondary' : '#94A3B8'}
                    border={selectedSort === sort ? '1px solid #475569' : '1px solid #CCD6E3'}
                    cursor='pointer'
                  >
                    {sort}
                  </Box>
                ))}
              </Flex>
            </Flex>
            <Box className='Display-md'>다른 팀원은 어떤 일을 했을까요?</Box>
            <Flex direction='column'>
              {(!data || data?.length === 0) &&
                (sort === 'all' ? (
                  <NonData extraText='서버에 디스코드 봇을 추가하여 팀원들과 소통해보세요!' />
                ) : (
                  <NonData />
                ))}

              {data?.map((el) => (
                <WorkItem
                  key={el.id}
                  name={el.sender.name}
                  profileImage={el.sender.profileImage}
                  part={el.sender.part}
                  content={el.sender.content}
                  createdAt={el.sender.createdAt}
                  receiver={el.receiver}
                />
              ))}
              {currentTap === '보낸 요청'}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default QuestionListPage;
