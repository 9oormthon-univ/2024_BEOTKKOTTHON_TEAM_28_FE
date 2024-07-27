import { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import RnRContentItem from './RnRContentItem';
import saveSVG from '../../../assets/save.svg';

import PropTypes from 'prop-types';
import useTeamStore from '../../../stores/useTeamStore';
import { getMemberList } from '../../../api/taskhistory';

const RnRModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { teamName } = useTeamStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberList();
      setData(response);
    };

    fetchData();
  }, []);

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
            {/* 모달바디 안에서 작업하기 */}
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
                {/* {teamName}의 멤버 {num} */}
                {teamName}의 멤버 {data?.data?.memberCount || 0}
              </Box>
            </Flex>
            <Flex direction='column'>
              <RnRContentItem />
              <RnRContentItem />
              <RnRContentItem />
              {data?.data?.memberList?.map((member) => (
                <RnRContentItem
                  key={member.memberId}
                  memberId={member.memberId}
                  nickname={member.nickname}
                  part={member.part}
                  profileImage={member.profileImage}
                />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex direction='column' width='100%' gap='24px'>
              <Flex gap='12px' alignItems='center'>
                <img src={saveSVG} alt='저장 아이콘' />
                <Box className='Body-md'>작성 내용은 자동 저장됩니다.</Box>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

RnRModal.propTypes = {
  num: PropTypes.string,
};

export default RnRModal;
