import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

import { getProjectList } from '../../api/common';
import no_team_profile from '../../assets/images/no_team_profile.png';
import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useTeamStore from '../../stores/useTeamStore';

const TeamSelectModal = ({ isGoTaskHistory }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const splittedPathname = pathname.split('/');

  const { teamId, teamName, handleTeamId, isOpenTeamSelectModal, closeTeamSelectModal } =
    useTeamStore();

  const [projects, setProjects] = useState([]);

  const [selectedTeam, setSelectedTeam] = useState({ teamId, teamName });

  useEffect(() => {
    const fetchProjectList = async () => {
      const projectListData = await getProjectList();
      setProjects(projectListData.progressingProjectList);
    };

    fetchProjectList();
  }, []);

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
        <ModalCloseButton />
        <ModalBody position='relative'>
          <Flex direction='column' width={500} gap='32px'>
            <Box className='Display-sm'>프로젝트를 변경해요</Box>
            <Flex direction='column' gap='8px' width='100%'>
              {projects?.map((project) => (
                <Flex
                  width='100%'
                  borderRadius='4px'
                  padding='12px'
                  gap='6px'
                  alignItems='center'
                  border={
                    selectedTeam.teamId === project.id ? '2px solid #059669' : '2px solid white'
                  }
                  key={project.name}
                  onMouseEnter={() => {
                    setSelectedTeam({ teamId: project.id, teamName: project.name });
                  }}
                  onMouseLeave={() => {
                    setSelectedTeam({ teamId: 0, teamName: '' });
                  }}
                  onClick={() => {
                    handleTeamId(project.id, project.name);
                    closeTeamSelectModal();
                    if (!isGoTaskHistory || splittedPathname[2] === 'team-task-history') {
                      navigate(`/${project.id}/team-task-history`);
                    }
                    if (isGoTaskHistory || splittedPathname[2] === 'task-history') {
                      navigate(`/${project.id}/task-history`);
                    }
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
            </Flex>
            {(!projects || projects?.length === 0) && (
              <Box className='Body-md'>연결된 프로젝트가 없어요!</Box>
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
