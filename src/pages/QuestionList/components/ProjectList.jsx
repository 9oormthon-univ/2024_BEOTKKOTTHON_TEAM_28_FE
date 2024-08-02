import { Box, Flex, Image, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import ToggleIcon from '../../../components/atoms/ToggleIcon';
import getProjectList from '../../../api/common/getProjectList';
import no_team_profile from '../../../assets/images/no_team_profile.png';
import { useEffect } from 'react';
import { useState } from 'react';

const ProjectList = ({ handleCurrentTeam, currentTeam }) => {
  const [isToggledInProgressList, setIsToggledInProgressList] = useState(true);
  const [isToggledCompletedList, setIsToggledCompletedList] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList();
      setData(response);
    };

    fetchData();
  }, []);

  const handleTeamClick = (team) => {
    handleCurrentTeam(team);
  };

  return (
    <Flex
      direction='column'
      border='1px solid #CCD6E3'
      width='280px'
      padding='12px'
      borderRadius='12px'
      className='SubHead-xl'
      gap='12px'
      marginBottom='00px'
      minHeight='140px'
    >
      <Box>
        전체 프로젝트{' '}
        <Text as='span' color='successBold'>
          {data && data.progressingProjectCount + data.endProjectCount}
        </Text>
      </Box>
      <Flex direction='column' gap='12px'>
        <Flex
          gap='2px'
          onClick={() => {
            setIsToggledInProgressList((prev) => !prev);
          }}
        >
          <ToggleIcon isToggled={isToggledInProgressList} />
          <Box>
            진행중{' '}
            <Text as='span' color='successBold'>
              {data?.progressingProjectCount ?? 0}
            </Text>
          </Box>
        </Flex>
        {isToggledInProgressList && (
          <Flex direction='column' gap='12px'>
            {data?.progressingProjectList.length === 0 && (
              <Flex gap='8px' alignItems='center' padding='4px' borderRadius='4px'>
                <Image src={no_team_profile} alt='팀 프로필' width='48px' />
                <Box>프로젝트가 없어요</Box>
              </Flex>
            )}
            {data?.progressingProjectList?.map((el) => (
              <Flex
                key={el.id}
                gap='8px'
                alignItems='center'
                onClick={() => {
                  handleCurrentTeam({ teamName: el.name, teamId: el.id });
                  handleTeamClick({ teamName: el.name, teamId: el.id });
                }}
                border={
                  currentTeam.teamId === el.id ? '1.2px solid #059669' : '1.2px solid transparent'
                }
                _hover={{
                  background: currentTeam.teamId === el.id ? 'transparent' : '#F0F2F4',
                }}
                padding='4px'
                borderRadius='4px'
                cursor='pointer'
                color={currentTeam.teamId === el.id ? '#059669' : '#0A0A0D'}
              >
                <Image src={el.image ?? no_team_profile} alt='팀 프로필' width='48px' />
                <Box>{el.name}</Box>
              </Flex>
            ))}
          </Flex>
        )}
        <Flex
          gap='2px'
          onClick={() => {
            setIsToggledCompletedList((prev) => !prev);
          }}
        >
          <ToggleIcon isToggled={isToggledCompletedList} />
          <Box>
            완료{' '}
            <Text as='span' color='successBold'>
              {data?.endProjectCount ?? 0}
            </Text>
          </Box>
        </Flex>
        {isToggledCompletedList && (
          <Flex direction='column' gap='12px'>
            {data?.endProjectList.length === 0 && (
              <Flex gap='8px' alignItems='center' padding='4px' borderRadius='4px'>
                <Image src={no_team_profile} alt='팀 프로필' width='48px' />
                <Box>프로젝트가 없어요</Box>
              </Flex>
            )}
            {data?.endProjectList?.map((el) => (
              <Flex
                key={el.id}
                gap='8px'
                alignItems='center'
                border={
                  currentTeam.teamId === el.id ? '1.2px solid #059669' : '1.2px solid transparent'
                }
                _hover={{
                  background: currentTeam.teamId === el.id ? 'transparent' : '#F0F2F4',
                }}
                color={currentTeam.teamId === el.id ? '#059669' : '#0A0A0D'}
                padding='4px'
                borderRadius='4px'
                cursor='pointer'
                onClick={() => {
                  handleCurrentTeam({ teamName: el.name, teamId: el.id });
                  handleTeamClick({ teamName: el.name, teamId: el.id });
                }}
              >
                <Image src={el.image ?? no_team_profile} alt='팀 프로필' width='48px' />
                <Box>{el.name}</Box>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

ProjectList.propTypes = {
  handleCurrentTeam: PropTypes.func,
  currentTeam: PropTypes.any,
};

export default ProjectList;
