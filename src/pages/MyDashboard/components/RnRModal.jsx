import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import RnRContentItem from './RnRContentItem';
import { getMemberList } from '../../../api/taskhistory';
import postMemberRnR from '../../../api/team/postMemberRnR';
import useUserStore from '../../../stores/userStore';

const RnRModal = ({ teamId, teamName, isOpen, onClose }) => {
  const [data, setData] = useState([]);
  const [isDoneStatus, setIsDoneStatus] = useState({});
  const [memberRnRData, setMemberRnRData] = useState([]);

  const handleMemberRnRData = (memberId, content) => {
    setMemberRnRData((prev) => {
      const exists = prev.some((item) => item.memberId === memberId);
      if (exists) {
        return prev.map((item) => (item.memberId === memberId ? { memberId, content } : item));
      } else {
        return [...prev, { memberId, content }];
      }
    });
  };

  const { userId, userName } = useUserStore((state) => ({
    userId: parseInt(state.userId, 10),
    userName: state.userName,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMemberList(teamId);

        const memberList = response.memberList || [];

        const filteredMemberList = memberList.filter((member) => member.nickname !== userName);

        const updatedMemberList = filteredMemberList.map((member) => ({
          memberId: member.memberId,
          content: '',
        }));

        setData(filteredMemberList);
        setMemberRnRData(updatedMemberList);
        setIsDoneStatus(
          filteredMemberList.reduce((acc, member) => {
            acc[member.memberId] = false;
            return acc;
          }, {}),
        );
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [userId, teamId, userName]);

  const handleIsDoneChange = (memberId, status) => {
    setIsDoneStatus((prevStatus) => ({
      ...prevStatus,
      [memberId]: status,
    }));
  };

  const allDone = Object.values(isDoneStatus).every((status) => status);

  const handleSubmitRnR = async () => {
    for (const { memberId, content } of memberRnRData) {
      await postMemberRnR(teamId, memberId, content);
    }
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius='16px' minWidth='fit-content'>
        <ModalCloseButton />
        <ModalBody paddingX='40px' paddingY='48px'>
          <Flex direction='column'>
            <Box className='Display-sm'>
              {teamName}를 진행하면서
              <br />
              팀원분들은 어떠셨나요?
            </Box>
            <Box color='brandBold'>
              * 동료 평가를 진행하지 않으면, 본인의 평가를 확인할 수 없어요
            </Box>
            <Box marginY='24px' className='SubHead-xl'>
              {teamName}의 멤버 {data.length}
            </Box>
          </Flex>
          <Flex direction='column'>
            {data.map((member) => {
              const memberContent = memberRnRData.filter(
                ({ memberId }) => memberId === member.memberId,
              );
              return (
                <RnRContentItem
                  memberRnR={memberContent}
                  onChange={handleMemberRnRData}
                  key={member.memberId}
                  memberId={member.memberId}
                  nickname={member.nickname}
                  part={member.part}
                  profileImage={member.profileImage}
                  onIsDoneChange={handleIsDoneChange}
                />
              );
            })}
          </Flex>
          <Button
            width='100%'
            background={allDone ? '#059669' : '#E2E8F0'}
            color={allDone ? 'white' : '#A0AEC0'}
            _hover={{
              background: allDone ? '#059669' : '#E2E8F0',
              color: allDone ? 'white' : '#A0AEC0',
            }}
            isDisabled={!allDone}
            onClick={handleSubmitRnR}
          >
            동료평가 제출
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

RnRModal.propTypes = {
  teamName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  teamId: PropTypes.number,
};

export default RnRModal;
