import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from '@chakra-ui/react';

const ProjectList = () => {
  return (
    <Accordion position='fixed'>
      <AccordionItem background='gray.100' width='250px'>
        <Box as='span' flex='1' textAlign='left'>
          전체 프로젝트
        </Box>
        <h2>
          <AccordionButton>
            <AccordionIcon />
            <Box as='span' flex='1' textAlign='left'>
              전체 프로젝트
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex direction='column' gap='20px'>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 B</Box>
            </Flex>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 C</Box>
            </Flex>
          </Flex>
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <AccordionIcon />
            <Box as='span' flex='1' textAlign='left'>
              지난 프로젝트
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex direction='column' gap='20px'>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 B</Box>
            </Flex>
            <Flex>
              <div>이미지</div>
              <Box>프로젝트 C</Box>
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProjectList;
