import { Box, Flex } from '@chakra-ui/react';
import { MemberList, TabBar } from '../component/common/organisms';

const HomePage = () => {
  return (
    <main>
      <Box>
        <Box height={300} bg='teal.500'>
          순위 박스
        </Box>
        <Flex>
          <Box>
            <MemberList />
          </Box>
          <Box>
            <TabBar />
          </Box>
        </Flex>
      </Box>
    </main>
  );
};

export default HomePage;
