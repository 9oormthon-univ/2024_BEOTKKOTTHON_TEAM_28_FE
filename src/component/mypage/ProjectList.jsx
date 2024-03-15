import { Flex } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';

const GardenList = () => {
  return (
    <Flex direction='column' gap='40px'>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Flex>
  );
};

export default GardenList;
