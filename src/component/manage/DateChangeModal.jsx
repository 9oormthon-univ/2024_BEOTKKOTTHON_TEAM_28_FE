import {
  Box,
  Button,
  Flex,
  Input,
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
import useToastStore from '../../stores/toastStore';

const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const openDatePicker = (id) => {
  document.getElementById(id).showPicker();
};

const toLocalISOString = (date) => {
  const tzOffset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localISOTime = new Date(date - tzOffset).toISOString().slice(0, 16);
  return localISOTime;
};

const DateChangeModal = ({ currentUser, id, startAt, endAt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleShowToastMessage } = useToastStore();

  const [data, setData] = useState({
    startAt: new Date(startAt),
    endAt: new Date(endAt),
  });

  const handleSubmit = () => {
    const formattedData = {
      startAt: toLocalISOString(data.startAt),
      endAt: toLocalISOString(data.endAt),
    };
    console.log(formattedData);
    patchDateChange(currentUser.memberId, id, formattedData);
    handleShowToastMessage('업무 시간 수정 완료!');
    onClose();
  };

  return (
    <>
      <Button
        paddingX='75px'
        paddingY='13px'
        border='1px solid black'
        variant='grayWhite'
        w='100%'
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      >
        수정하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content' marginTop='250px'>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' gap='24px' width='700px' padding='48px'>
              <Box className='Display-sm'>{currentUser?.name}님의 시간을 수정해주세요</Box>
              <Flex gap='24px'>
                <Button
                  className='Display-sm'
                  onClick={() => {
                    const newDate = data.endAt;
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
                  className='Display-sm'
                  onClick={() => {
                    const newDate = data.endAt;
                    newDate.setHours(newDate.getHours() - 1);
                    setData((prev) => ({
                      ...prev,
                      endAt: newDate,
                    }));
                  }}
                >
                  -1시간
                </Button>
                <Button
                  className='Display-sm'
                  onClick={() => {
                    const newDate = data.endAt;
                    newDate.setHours(newDate.getHours() - 6);
                    setData((prev) => ({
                      ...prev,
                      endAt: newDate,
                    }));
                  }}
                >
                  -6시간
                </Button>
              </Flex>
              <Flex gap='24px' alignItems='center' width='100%'>
                <Flex
                  width='100%'
                  justifyContent='center'
                  padding='12px'
                  border='1px solid #CCD6E3'
                  borderRadius='4px'
                >
                  <Input
                    id='startAt'
                    type='datetime-local'
                    style={{ display: 'none' }}
                    value={data.startAt}
                    onChange={(e) => {
                      setData((prev) => ({
                        ...prev,
                        startAt: new Date(e.target.value),
                      }));
                    }}
                  />
                  <label
                    className='Display-sm'
                    htmlFor='startAt'
                    onClick={() => {
                      openDatePicker('startAt');
                    }}
                  >
                    {formatDateTime(data.startAt)}
                  </label>
                </Flex>
                <Box>~</Box>
                <Flex
                  width='100%'
                  justifyContent='center'
                  padding='12px'
                  border='1px solid #CCD6E3'
                  borderRadius='4px'
                >
                  <Input
                    id='endAt'
                    type='datetime-local'
                    style={{ display: 'none' }}
                    value={data.endAt}
                    onChange={(e) => {
                      setData((prev) => ({
                        ...prev,
                        endAt: new Date(e.target.value),
                      }));
                    }}
                  />
                  <label
                    className='Display-sm'
                    htmlFor='endAt'
                    onClick={() => {
                      openDatePicker('endAt');
                    }}
                  >
                    {formatDateTime(data.endAt)}
                  </label>
                </Flex>
              </Flex>
              <Button onClick={handleSubmit} variant='greenWhite' className='SubHead-xl'>
                선택 완료
              </Button>
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
  id: PropTypes.number,
};

export default DateChangeModal;
