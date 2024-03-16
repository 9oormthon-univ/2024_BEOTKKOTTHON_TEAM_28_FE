import { Banner, QuestionBox } from '../component/home';
import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../component/common/organisms';

import { Note } from '../component/common/mocules';
import WorkItem from '../component/home/WorkItem';

const Tabs = ['전체', '기획', '디자인', '프론트', '백엔드', '스크럼'];
const HomePage = () => {
  return (
    <main>
      <Flex direction='column' gap='64px'>
        <Banner />
        <Flex margin='auto'>
          <Flex direction='column' position='fixed' top='300px' gap='64px'>
            <QuestionBox />
            <MemberList />
          </Flex>
          <Flex direction='column' marginLeft='327px' w='922px' gap='36px'>
            <Note />
            <Box>
              <TabBar tabs={Tabs} />
              <Box className='Display-sm' marginY='24px'>
                스타트업 밸리의 다른 팀원은 어떤 일을 했을까요?
              </Box>
              <Flex direction='column' gap='20px'>
                <WorkItem />
                <WorkItem />
                <WorkItem />
                <WorkItem />
                <WorkItem />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default HomePage;
