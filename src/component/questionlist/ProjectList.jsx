import { Box, Flex, Image } from '@chakra-ui/react';

import { ToggleIcon } from '../common/atoms';
import cucumber from '../../assets/cucumber.png';
import { useState } from 'react';

const ProjectList = () => {
  const [isToggledInProgressList, setIsToggledInProgressList] = useState(false);
  const [isToggledCompletedList, setIsToggledCompletedList] = useState(false);
  return (
    <Flex
      direction='column'
      position='fixed'
      border='1px solid #CCD6E3'
      width='280px'
      padding='12px'
      borderRadius='12px'
      className='SubHead-xl'
      gap='12px'
    >
      <Box>전체프로젝트</Box>
      <Flex direction='column' gap='12px'>
        <Flex
          gap='2px'
          onClick={() => {
            setIsToggledInProgressList((prev) => !prev);
          }}
        >
          <ToggleIcon isToggled={isToggledInProgressList} />
          <Box>진행중</Box>
        </Flex>
        {isToggledInProgressList && (
          <Flex direction='column' gap='12px'>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
          </Flex>
        )}
        <Flex
          gap='2px'
          onClick={() => {
            setIsToggledCompletedList((prev) => !prev);
          }}
        >
          <ToggleIcon isToggled={isToggledCompletedList} />
          <Box>완료</Box>
        </Flex>
        {isToggledCompletedList && (
          <Flex direction='column' gap='12px'>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
            <Flex gap='8px' alignItems='center'>
              <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
              <Box>프로젝트 A</Box>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectList;
