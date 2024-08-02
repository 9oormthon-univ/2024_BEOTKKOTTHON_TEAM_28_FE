import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { discordBotUrl } from '../../../constants';
import { getProjectList } from '../../../api/common';
import no_team_profile from '../../../assets/images/no_team_profile.png';
import nonexistence from '../../../assets/nonexistence.svg';
import propTypes from 'prop-types';
import useTeamStore from '../../../stores/useTeamStore';

const TeamSelectModal = ({ isGoTaskHistory }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const splittedPathname = pathname.split('/');

  const { handleTeamId, isOpenTeamSelectModal, closeTeamSelectModal } = useTeamStore();

  const [projects, setProjects] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState({ teamId: null, teamName: '' });

  useEffect(() => {
    const fetchProjectList = async () => {
      const projectListData = await getProjectList();
      setProjects(projectListData.progressingProjectList);
    };

    fetchProjectList();
  }, []);

  const handleProjectClick = (projectId, projectName) => {
    setSelectedTeam({ teamId: projectId, teamName: projectName });
  };

  return (
    <Modal
      zIndex='997'
      borderRadius='4px'
      blockScrollOnMount={false}
      isOpen={isOpenTeamSelectModal}
      onClose={closeTeamSelectModal}
    >
      <ModalOverlay />
      <ModalContent padding='40px' borderRadius='16px' minWidth='780px' marginTop='250px'>
        <ModalBody position='relative'>
          <Flex direction='column' gap='32px'>
            <Box className='Display-sm'>프로젝트를 변경해요</Box>
            <Flex direction='column' gap='8px' width='100%'>
              {projects?.map((project) => (
                <Flex
                  key={project.name}
                  width='100%'
                  borderRadius='4px'
                  padding='12px'
                  gap='6px'
                  alignItems='center'
                  border={
                    selectedTeam.teamId === project.id ? '2px solid #059669' : '2px solid white'
                  }
                  background={selectedTeam.teamId === project.id ? '#ECFDF5' : 'white'}
                  color={selectedTeam.teamId === project.id ? '#065F46' : 'black'}
                  onClick={() => handleProjectClick(project.id, project.name)}
                  cursor='pointer'
                  _hover={{
                    background: selectedTeam.teamId === project.id ? '#ECFDF5' : '#CCD6E3',
                  }}
                >
                  <img
                    src={project.image ?? no_team_profile}
                    alt={project.name}
                    width='40px'
                    height='40px'
                  />
                  <Box className='Body-md' _hover={{ textDecoration: 'none' }}>
                    {project.name}
                  </Box>
                </Flex>
              ))}
              {projects?.length > 0 && (
                <Button
                  mt='24px'
                  w='100%'
                  h='50px'
                  _hover={{
                    background: 'brand',
                    color: 'white',
                  }}
                  isDisabled={!selectedTeam.teamId}
                  onClick={() => {
                    handleTeamId(selectedTeam.teamId, selectedTeam.teamName);
                    closeTeamSelectModal();
                    if (!isGoTaskHistory || splittedPathname[2] === 'team-task-history') {
                      navigate(`/team-task-history/${selectedTeam.teamId}`);
                    }
                    if (isGoTaskHistory || splittedPathname[2] === 'task-history') {
                      navigate(`/${selectedTeam.teamId}/task-history`);
                    }
                  }}
                >
                  선택 완료
                </Button>
              )}
            </Flex>
            {(!projects || projects?.length === 0) && (
              <Flex
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Img src={nonexistence} alt='Icon' width='144.476px' />
                <Box className='Headline-lg' mt='36px'>
                  서버가 존재하지 않아요
                </Box>
                <Box className='Body-md' textAlign='center'>
                  서버에 디스코드 봇을 추가하여 <br />
                  팀원들과 소통해보세요!
                </Box>
                <Button
                  mt='24px'
                  bg='#059669'
                  color='white'
                  w='100%'
                  h='50px'
                  _hover={{
                    background: 'brand',
                    color: 'white',
                  }}
                  onClick={() => {
                    window.open(discordBotUrl, '_blank');
                  }}
                >
                  봇 연결하기
                </Button>
              </Flex>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

TeamSelectModal.propTypes = {
  isGoTaskHistory: propTypes.bool,
};

export default TeamSelectModal;
