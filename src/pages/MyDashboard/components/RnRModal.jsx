import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import RnRContentItem from './RnRContentItem';
import PropTypes from 'prop-types';
import { getMemberList } from '../../../api/taskhistory';
import useUserStore from '../../../stores/userStore';

const RnRModal = ({ teamName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [isDoneStatus, setIsDoneStatus] = useState({});

  const { userId } = useUserStore((state) => ({
    userId: parseInt(state.userId, 10),
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMemberList(3);
        console.log('API Response:', response);

        const memberList = response.memberList || [];
        console.log('Member List:', memberList);

        // 본인을 제외한 멤버 리스트
        const filteredMemberList = memberList.filter((member) => member.memberId !== userId);
        console.log('Filtered Member List:', filteredMemberList);

        setData(filteredMemberList);
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
  }, [userId]);

  useEffect(() => {
    console.log('isDoneStatus:', isDoneStatus);
    console.log('allDone:', allDone);
  }, [isDoneStatus, allDone]);

  const handleIsDoneChange = (memberId, status) => {
    setIsDoneStatus((prevStatus) => ({
      ...prevStatus,
      [memberId]: status,
    }));
  };

  const allDone = Object.values(isDoneStatus).every((status) => status);

  return (
    <>
      <Box onClick={onOpen} borderBottom='1px solid #334155'>
        나의 R&R 작성
      </Box>
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
              {data.map((member) => (
                <RnRContentItem
                  key={member.memberId}
                  memberId={member.memberId}
                  nickname={member.nickname}
                  part={member.part}
                  profileImage={member.profileImage}
                  onIsDoneChange={handleIsDoneChange}
                />
              ))}
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
            >
              동료평가 제출
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

RnRModal.propTypes = {
  teamName: PropTypes.string.isRequired,
};

export default RnRModal;
