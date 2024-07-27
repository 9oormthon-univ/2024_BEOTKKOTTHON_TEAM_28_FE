import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../../components/organisms';

import Banner2 from './components/Banner2';
import { MemberItem } from '../../components/molecules';
import NonData from '../../components/molecules/NonData';
import { QuestionBox } from './components';
import WorkItem from './components/WorkItem';
import getFullDate from '../../lips/getFullDate';
import { getMemberTasks } from '../../api/teamhistory';
import getTeamInfo from '../../api/team/getTeamInfo';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useTeamStore from '../../stores/useTeamStore';

// import { Note } from '../../components/molecules';

const Tabs = ['전체', '기획', '디자인', '프론트', '백엔드'];

const TabString = ['all', 'pm', 'design', 'front', 'back'];
const Parts = ['all', 'PM', 'DESIGN', 'FRONTEND', 'BACKEND'];

const HomePage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentTap, setCurrentTap] = useState('전체');
  const [part, setPart] = useState('all');
  const [sort, setSort] = useState('all');

  const [projectName, setProjectName] = useState('');

  const { handleTeamId } = useTeamStore();

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
            {/* <Note placeholder={`${projectName}에서 오늘은 어떤 작업을 진행하셨나요?`} /> */}
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
