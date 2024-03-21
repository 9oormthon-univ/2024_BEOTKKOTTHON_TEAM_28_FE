import { Box, Flex } from '@chakra-ui/react';

import { MemberList } from '../component/common/organisms';
import { TaskItem } from '../component/manage';
import { TeamProfile } from '../component/taskhistory';

const ManagePage = () => {
  return (
    <main>
      <Flex gap='27px' mt='68px' justifyContent='center'>
        <Flex direction='column' left='325px' position='fixed' gap='92px'>
          <TeamProfile />
          <MemberList />
        </Flex>
        <Flex direction='column' marginLeft='327px' w='922px' gap='42px'>
          <Flex direction='column'>
            <Box className='Display-md'>정아현님의 업무시간</Box>
            <Box className='Display-sm'>팀원들의 업무 시간을 확인해 주세요!</Box>
          </Flex>
          <Flex direction='column' gap='26px'>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default ManagePage;
