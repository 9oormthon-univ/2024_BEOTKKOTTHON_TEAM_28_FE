import { Box, Divider, Flex } from '@chakra-ui/react';

import { TitleProfile } from '../common/mocules';

const TaskItem = () => {
  return (
    <Flex direction='column' gap='20px'>
      <TitleProfile />
      <Flex
        direction='column'
        gap='24px'
        paddingX='32px'
        paddingY='16px'
        background='gray.100'
        borderRadius='12px'
      >
        <Flex gap='16px' alignItems='center'>
          <Box className='Headline-md'>2024. 03. 13 - 2024. 03. 17</Box>
          <Box>NN 시간</Box>
        </Flex>
        <Flex direction='column' gap='24px' className='Body-lg'>
          <Box>
            요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다
          </Box>
          <Divider />
          <Flex direction='column' gap='12px'>
            <Flex
              direction='column'
              background='white'
              paddingX='24px'
              paddingY='16px'
              gap='10px'
              borderRadius='4px'
            >
              <Box className='SubHead-xl'>@username</Box>
              <Box className='Body-lg'>디테일한 사항에 대한 내용들</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TaskItem;
