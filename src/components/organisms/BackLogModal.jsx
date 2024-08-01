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
import { getMemberScrum, getPeerReviewResult, getTeamInfo } from '../../api/taskhistory';

import PropTypes from 'prop-types';
import TaskItem from '../../pages/TeamHistory/components/TaskItem';
import { getPartName } from '../../lips/getPartName';
import no_team_profile from '../../assets/images/no_team_profile.png';
import patchProjectPublic from '../../api/dashboard/patchProjectPublic';
import { useEffect } from 'react';
import { useState } from 'react';
import useUserStore from '../../stores/userStore';

const BackLogModal = ({ memberId, teamId, id, isOpen, onClose }) => {
  const [data, setData] = useState();

  const [teamData, setTeamData] = useState();
  const [scrums, setScrums] = useState();

  const { userId } = useUserStore();

  const togglePublicClick = async () => {
    await patchProjectPublic(userId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPeerReviewResult(memberId ?? userId);

      setData(response);
    };

    fetchData();
  }, [memberId, userId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeamInfo(teamId);

      setTeamData(response);
    };

    fetchData();
  }, [teamId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberScrum(teamId, memberId ?? userId);

      setScrums(response);
    };

    fetchData();
  }, [userId, teamId, memberId]);

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius='16px' minWidth='fit-content'>
        <ModalCloseButton />
        <ModalBody padding='64px'>
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
                  {userId === id && (
                    <Button
                      variant='grayWhite'
                      width='200px'
                      bg='#475569'
                      onClick={togglePublicClick}
                    >
                      비공개 전환
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
                {scrums?.map((el) => (
                  <TaskItem
                    key={el.id}
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
  onClose: PropTypes.func,
};
export default BackLogModal;
