import { Box, Divider, Flex } from '@chakra-ui/react';

import { TitleProfile } from '../common/mocules';

const WorkItem = () => {
  return (
    <Flex direction='column' gap='20px'>
      <TitleProfile />
      <Box
        className='Body-lg'
        color='tertiary'
        paddingX='24px'
        paddingY='16px'
        background='gray.100'
      >
        디테일한 사항에 대한 내용들
      </Box>
      <Divider />
    </Flex>
  );
};

export default WorkItem;
