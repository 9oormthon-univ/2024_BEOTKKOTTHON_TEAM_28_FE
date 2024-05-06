import { Banner, QuestionBox } from '../../component/home';
import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../../component/common/organisms';

import WorkItem from '../component/home/WorkItem';
import { getMemberTasks } from '../api/teamhistory';
import { getMemberRanking } from '../api/teamhistory';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// import { Note } from '../component/common/mocules';

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberTasks(id, sort);
      setData(response);

      const rankingResponse = await getMemberRanking(id);
      setProjectName(rankingResponse?.projectName ?? '');
    };

    fetchData();
  }, [id, sort, currentTap]);

  const handleCurrentTap = (string) => {
    setCurrentTap(string);
    setSort(TabString[Tabs.indexOf(string)]);
    setPart(Parts[Tabs.indexOf(string)]);
  };

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex direction='column' gap='64px'>
        <Banner />
        <Flex margin='auto'>
          <Flex direction='column' gap='64px'>
            <QuestionBox />
            <MemberList isWhite={true} projectName={projectName} />
          </Flex>
          <Flex direction='column' marginLeft='48px' w='922px' gap='36px'>
            {/* <Note /> */}
            <Box>
              <TabBar tabs={Tabs} currentTap={currentTap} handleCurrentTap={handleCurrentTap} />
              <Box className='Display-sm' marginY='24px'>
                {projectName}의 다른 팀원은 어떤 일을 했을까요?
              </Box>
              <Flex direction='column' gap='20px'>
                {sort === 'all' &&
                  data.map((el) => (
                    <WorkItem
                      key={el.content}
                      part={el.part}
                      content={el.content}
                      createdAt={el.createdAt}
                      profileImage={el.profileImage}
                      nickname={el.nickname}
                    />
                  ))}
                {data
                  .filter((el) => sort !== 'all' && el.part === part)
                  .map((el) => (
                    <WorkItem
                      key={el.content}
                      part={el.part}
                      content={el.content}
                      createdAt={el.createdAt}
                      profileImage={el.profileImage}
                      nickname={el.nickname}
                    />
                  ))}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default HomePage;
