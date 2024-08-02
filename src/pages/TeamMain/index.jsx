import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../../components/organisms';

import Banner2 from './components/Banner2';
import { MemberItem } from '../../components/molecules';
import NonData from '../../components/molecules/NonData';
import { Note } from '../../components/molecules';
import { QuestionBox } from './components';
import WorkItem from './components/WorkItem';
import getFullDate from '../../lips/getFullDate';
import { getMemberTasks } from '../../api/teamhistory';
import getTeamInfo from '../../api/team/getTeamInfo';
import getTeamMemberStatus from '../../api/team/getTeamMemberStatus';
import postWorkInfo from '../../api/team/postWorkInfo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useTeamStore from '../../stores/useTeamStore';
import useToastStore from '../../stores/toastStore';
import useUserStore from '../../stores/userStore';

const Tabs = ['전체', '기획', '디자인', '프론트', '백엔드', '풀스택', '스크럼'];

const TabString = ['all', 'pm', 'design', 'front', 'back', 'fullstack'];
const Parts = ['all', 'PM', 'DESIGN', 'FRONTEND', 'BACKEND', 'FULLSTACK'];

const HomePage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentTap, setCurrentTap] = useState('전체');
  const [part, setPart] = useState('all');
  const [sort, setSort] = useState('all');

  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [teamStatus, setTeamStatus] = useState({ currentWorkerList: [] });

  const { teamId, handleTeamId, openTeamSelectModal } = useTeamStore();
  const { userName } = useUserStore();
  const { handleShowToastMessage } = useToastStore();

  const myStatus = teamStatus.currentWorkerList.filter((worker) => worker.nickname === userName);

  const isWorkingNow = !!myStatus;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberTasks(id, sort);
      setData(response);

      const res = await getTeamInfo(id);
      setProjectName(res.name ?? '');
      handleTeamId(id, res.name);
    };

    if (id) {
      fetchData();
    }
  }, [id, sort, currentTap, handleTeamId]);

  const handleCurrentTap = (string) => {
    setCurrentTap(string);
    setSort(TabString[Tabs.indexOf(string)]);
    setPart(Parts[Tabs.indexOf(string)]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeamMemberStatus(id);
      setTeamStatus(res);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleWorkSubmit = async (content) => {
    await postWorkInfo(myStatus.memberId, content);
    handleShowToastMessage('오늘의 업무 등록 완료');

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    if (currentTap === Tabs[Tabs.length - 1]) {
      navigate(`/${id}/task-history`);
    }
  }, [navigate, currentTap, id]);

  useEffect(() => {
    if (userName && !teamId) {
      openTeamSelectModal();
    }
  }, [userName, openTeamSelectModal, teamId]);

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex direction='column' gap='64px'>
        <Banner2 isTeamId={!!id} />
        <Flex margin='auto'>
          <Flex direction='column' gap='64px'>
            <QuestionBox />
            {id ? (
              <MemberList isWhite />
            ) : (
              <Flex direction='column' gap='12px'>
                <Flex direction='column'>
                  <Box>멤버들의 백로그를 확인해보세요!</Box>
                </Flex>
                <Flex
                  direction='column'
                  gap='12px'
                  width='276px'
                  marginBottom='12px'
                  background='transparent'
                  border='1px solid #CCD6E3'
                  padding='12px'
                  borderRadius='12px'
                >
                  <MemberItem isBlank />
                </Flex>
              </Flex>
            )}
          </Flex>
          <Flex direction='column' marginLeft='48px' w='922px' gap='36px'>
            {id && isWorkingNow && (
              <Note
                onSubmit={handleWorkSubmit}
                placeholder={`${projectName}에서 오늘은 어떤 작업을 진행하셨나요?`}
              />
            )}
            <Box>
              <TabBar tabs={Tabs} currentTap={currentTap} handleCurrentTap={handleCurrentTap} />
              <Box className='Display-sm' marginY='24px'>
                {projectName && `${projectName} 의`}다른 팀원은 어떤 일을 했을까요?
              </Box>
              <Flex direction='column' gap='20px'>
                {sort === 'all' &&
                  data?.map((el, index) => {
                    const showDate =
                      el.createdAt.split('T')[0] !== data[index - 1]?.createdAt.split('T')[0];

                    const date = getFullDate(el.createdAt);
                    return (
                      <>
                        {el.content && showDate && <div className='Headline-md'>{date}</div>}
                        <WorkItem
                          key={el.content}
                          part={el.part}
                          content={el.content}
                          createdAt={el.createdAt}
                          profileImage={el.profileImage}
                          nickname={el.nickname}
                        />
                      </>
                    );
                  })}
                {data
                  ?.filter((el) => sort !== 'all' && el.part === part)
                  ?.map((el, index) => {
                    const showDate =
                      el.createdAt.split('T')[0] !== data[index - 1]?.createdAt.split('T')[0];

                    const date = getFullDate(el.createdAt);
                    return (
                      <>
                        {showDate && <div className='Headline-md'>{date}</div>}
                        <WorkItem
                          key={el.content}
                          part={el.part}
                          content={el.content}
                          createdAt={el.createdAt}
                          profileImage={el.profileImage}
                          nickname={el.nickname}
                        />
                      </>
                    );
                  })}
                {(!id || !data) && (
                  <NonData
                    isConnectButton
                    extraText='서버에 디스코드봇을 추가하여 팀원들과 소통해보세요!'
                  />
                )}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default HomePage;
