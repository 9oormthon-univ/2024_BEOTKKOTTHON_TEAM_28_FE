import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import patchDateChange from '../../api/manage/patchDateChange';
import { useState } from 'react';

const DateChangeModal = ({ currentUser, id, startAt, endAt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState({
    startAt,
    endAt,
  });

  const handleSubmit = () => {
    patchDateChange(currentUser.memberId, id, data);
  };

  return (
    <>
      <Button
        paddingX='75px'
        paddingY='13px'
        border='1px solid black'
        variant='grayWhite'
        w='100%'
        onClick={onOpen}
      >
        수정하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content' marginTop='250px'>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' width={500}>
              <Box>{currentUser?.name}님의 시간을 수정해주세요</Box>
              <Flex>
                <Button
                  onClick={() => {
                    const newDate = new Date(data.endAt);
                    newDate.setMinutes(newDate.getMinutes() - 30);
                    setData((prev) => ({
                      ...prev,
                      endAt: newDate,
                    }));
                  }}
                >
                  -30분
                </Button>
                <Button
                  onClick={() => {
                    const newDate = new Date(data.startAt);
                    newDate.setHours(newDate.getHours() - 1);
                    setData((prev) => ({
                      ...prev,
                      startAt: newDate,
                    }));
                  }}
                >
                  -1시간
                </Button>
                <Button
                  onClick={() => {
                    const newDate = new Date(data.startAt);
                    newDate.setHours(newDate.getHours() - 6);
                    setData((prev) => ({
                      ...prev,
                      startAt: newDate,
                    }));
                  }}
                >
                  -6시간
                </Button>
              </Flex>
              <Flex>
                <input
                  type='datetime-local'
                  value={data.startAt.toISOString().split('.')[0]}
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      startAt: new Date(e.target.value),
                    }));
                  }}
                />
                <Box>-</Box>
                <input
                  type='datetime-local'
                  value={data.endAt.toISOString().split('.')[0]}
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      endAt: new Date(e.target.value),
                    }));
                  }}
                />
              </Flex>
              <Button onClick={handleSubmit}>선택 완료</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

DateChangeModal.propTypes = {
  currentUser: PropTypes.object,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  id: PropTypes.string,
};

export default DateChangeModal;
