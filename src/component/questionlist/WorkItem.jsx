import { ContentBox, TitleProfile } from '../common/mocules';
import { Divider, Flex } from '@chakra-ui/react';

const WorkItem = () => {
  return (
    <Flex direction='column' gap='20px'>
      <TitleProfile />
      <ContentBox />
      <Divider />
    </Flex>
  );
};

export default WorkItem;
