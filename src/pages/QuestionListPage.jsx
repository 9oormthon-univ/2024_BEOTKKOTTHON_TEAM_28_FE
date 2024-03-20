import { Box, Flex } from '@chakra-ui/react';
import { FormBox, ProjectList } from '../component/questionlist';

import { SortTooltipList } from '../component/common/mocules';
import { TabBar } from '../component/common/organisms';
import WorkItem from '../component/questionlist/WorkItem';

const Tabs = ['받은 요청', '전달한 요청'];

const SortType = ['전체', '나를 멘션', '직무 관련 질문', '완료된 요청'];

const QuestionListPage = () => {
  return (
    <main>
      <Flex justify='center'>
        <Flex gap='27px' mt='68px'>
          <ProjectList />
          <Flex direction='column' marginLeft='327px' w='922px' gap='32px'>
            <FormBox />
            <Box className='Display-md'>스타트업 밸리 | 정아현님의 작업요청</Box>
            <Flex direction='column' gap='24px'>
              <TabBar tabs={Tabs} />
              <SortTooltipList sorts={SortType} />
            </Flex>
            <Box className='Display-md'>다른 팀원은 어떤 일을 했을까요?</Box>
            <Flex direction='column'>
              <WorkItem />
              <WorkItem />
              <WorkItem />
              <WorkItem />
              <WorkItem />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default QuestionListPage;
