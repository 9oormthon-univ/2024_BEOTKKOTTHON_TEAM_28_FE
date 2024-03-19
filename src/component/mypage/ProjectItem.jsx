import { Box, Flex, Text } from '@chakra-ui/react';

import RnRModal from './RnRModal';
import { StatusTag } from '../common/atoms';

const ProjectItem = () => {
  return (
    <Flex direction='column' gap='12px'>
      <Box className='SubHead-xl' color='brandBold'>
        2024.03.07 - 24.03.24.
      </Box>
      <Flex
        w='100%'
        background='gray.100'
        paddingY='24px'
        paddingX='32px'
        gap='20px'
        borderRadius='12px'
      >
        <div>이미지</div>
        <Flex flex='1' direction='column' gap='18px'>
          <Text className='Headline-lg'>프로젝트A</Text>
          <div>저는 이런 역할을 맡아서 했어요!</div>
        </Flex>
        <Flex direction='column' gap='6px'>
          <StatusTag />
          <RnRModal />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectItem;
