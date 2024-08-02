import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { getMemberScrum, getPeerReviewResult } from '../../api/taskhistory';

import Paths from '../../constants/Paths';
import PropTypes from 'prop-types';
import TaskItem from '../../pages/TeamHistory/components/TaskItem';
import { getPartName } from '../../lips/getPartName';
import getTeamsWithMemberId from '../../api/team/getMemberId';
import no_team_profile from '../../assets/images/no_team_profile.png';
import patchProjectPublic from '../../api/dashboard/patchProjectPublic';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../stores/userStore';

const BackLogModal = ({ isPublic, memberId, teamId, isOpen, onClose }) => {
  const location = useLocation();
  const currentPathName = location.pathname;

  const [isPublicc, setIsPublicc] = useState(isPublic);
  const [data, setData] = useState();

  const [teamData, setTeamData] = useState();
  const [scrums, setScrums] = useState();

  const { userId } = useUserStore();

  const togglePublicClick = async () => {
    await patchProjectPublic(memberId);
    setIsPublicc((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPeerReviewResult(memberId ?? userId);

      setData(response);
    };

    if (memberId || userId) {
      fetchData();
    }
  }, [memberId, userId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeamsWithMemberId(memberId, teamId);

      setTeamData(response);
    };
    if (memberId || teamId) {
      fetchData();
    }
  }, [teamId, memberId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberScrum(teamId, memberId ?? userId);

      setScrums(response);
    };

    if (teamId && (memberId || userId)) {
      fetchData();
    }
  }, [userId, teamId, memberId]);

  useCallback(() => {
    onClose(isPublicc);
  }, [isPublicc, onClose]);

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius='16px' minWidth='fit-content'>
        <ModalCloseButton />
        <ModalBody width='1100px' padding='64px'>
          <Flex direction='column' alignItems='flex-start' gap='40px'>
            <Flex alignItems='center' justifyContent='space-between' width='full'>
              <Flex gap='16px' alignItems='center'>
                <Image
                  src={teamData?.profileImage ?? no_team_profile}
                  alt='팀 프로필'
                  width='120px'
                />
                <Flex direction='column' width='383px'>
                  <Box className='Display-sm'>{teamData?.name}</Box>
                  <Box className='Body-xl'>
                    {teamData?.startAt} - {teamData?.endAt}
                  </Box>
                  {currentPathName === Paths.MyDashboard && (
                    <Button
                      variant='grayWhite'
                      width='200px'
                      bg='#475569'
                      onClick={togglePublicClick}
                    >
                      {isPublicc ? '비공개 전환' : '전체공개 전환'}
                    </Button>
                  )}
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Flex borderRadius='12px' background='#F0F2F4'>
                  <Flex
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    paddingX='63px'
                    paddingY='20px'
                    gap='16px'
                  >
                    <Box
                      className='SubHead-lg'
                      background='brand'
                      paddingX='8px'
                      paddingY='4px'
                      color='white'
                      borderRadius='16px'
                    >
                      참여시간
                    </Box>
                    <Box className='Display-sm'>{Math.floor(data?.totalTime / 60)}시간</Box>
                  </Flex>
                  <Flex
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    paddingX='63px'
                    paddingY='20px'
                    gap='16px'
                  >
                    <Box
                      className='SubHead-lg'
                      background='brand'
                      paddingX='8px'
                      paddingY='4px'
                      color='white'
                      borderRadius='16px'
                    >
                      직무
                    </Box>
                    <Box className='Display-sm'>{getPartName(data?.part)}</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' gap='20px' width='full'>
              <Box className='Display-sm'>동료 평가</Box>
              <Flex
                direction='column'
                padding='24px'
                border='1px solid #059669'
                background='#ECFDF5'
                borderRadius='12px'
                gap='16px'
              >
                {/* <Box color='brandBold' className='Headline-md'>
                    동료 평가 제목
                  </Box> */}
                {
                  <Box className='Body-lg'>
                    {data?.peerReviewSummary ?? '아직 동료 평가가 없어요'}
                  </Box>
                }
              </Flex>
            </Flex>
            <Flex direction='column' gap='20px' width='full'>
              <Box className='Display-sm'>
                백로그 <span style={{ color: '#065F46' }}>{scrums?.length}</span>
              </Box>
              <Flex direction='column' gap='20px' width='full'>
                {scrums?.length === 0 && (
                  <Box
                    border='1px solid #CCD6E3'
                    background='#F0F2F4'
                    borderRadius='12px'
                    padding='24px 32px'
                  >
                    등록된 백로그가 없어요
                  </Box>
                )}
                {scrums?.map((el) => (
                  <TaskItem
                    key={el.id}
                    totalTime={el.totalTime}
                    content={el.content}
                    startAt={el.startAt}
                    endAt={el.endAt}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

BackLogModal.propTypes = {
  id: PropTypes.number,
  teamId: PropTypes.number,
  memberId: PropTypes.number,
  isOpen: PropTypes.bool,
  isPublic: PropTypes.bool,
  onClose: PropTypes.func,
  toggleIsClickedChangedPublic: PropTypes.func,
};
export default BackLogModal;
