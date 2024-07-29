import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { getPeerReviewResult, getTeamInfo } from '../../../api/taskhistory';

import PropTypes from 'prop-types';
import no_team_profile from '../../../assets/images/no_team_profile.png';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../../stores/userStore';

const MyRoleModal = ({ teamId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [teamData, setTeamData] = useState();

  const { id } = useParams();
  const { userId, userName } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPeerReviewResult(userId);

      setData(response);
    };

    fetchData();
  }, [userId]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeamInfo(teamId);

      setTeamData(response);
    };

    fetchData();
  }, [teamId]);

  if (id !== undefined && id !== userId) return;

  return (
    <>
      <Box
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        textAlign='center'
        cursor='pointer'
        borderBottom='1px solid #334155'
      >
        나의 역할 작성
      </Box>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
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
                      <Box className='Display-sm'>{data?.part}</Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column' width='full' gap='20px'>
                <Box className='Display-md'>{userName}님의 역할</Box>
                <Input
                  className='Body-lg'
                  paddingY='20px'
                  width='full'
                  background='#F0F2F4'
                  border='1px solid #059669'
                />
              </Flex>
              <Button variant='greenWhite'>수정 내용 저장</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

MyRoleModal.propTypes = {
  teamId: PropTypes.number,
};
export default MyRoleModal;
