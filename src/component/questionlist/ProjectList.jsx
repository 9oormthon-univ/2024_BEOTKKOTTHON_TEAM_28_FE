import { Box, Flex, Image } from '@chakra-ui/react';

import { ToggleIcon } from '../common/atoms';
import cucumber from '../../assets/cucumber.png';
import getProjectList from '../../api/common/getProjectList';
import { useEffect } from 'react';
import { useState } from 'react';

const ProjectList = () => {
  const [isToggledInProgressList, setIsToggledInProgressList] = useState(false);
  const [isToggledCompletedList, setIsToggledCompletedList] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList();
      setData(response);
    };

    fetchData();
  }, []);

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
            {data?.map((el) => {
              if (el.status === 'IN_PROGRESS')
                return (
                  <Flex key={el.id} gap='8px' alignItems='center'>
                    <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
                    <Box>{el.name}</Box>
                  </Flex>
                );
            })}
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
            {data?.map((el) => {
              if (el.status === 'FINISH')
                return (
                  <Flex key={el.id} gap='8px' alignItems='center'>
                    <Image src={cucumber} alt='팀 프로필' width='48px' borderRadius='50%' />
                    <Box>{el.name}</Box>
                  </Flex>
                );
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectList;
