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
import patchDateChange from '../../../api/manage/patchDateChange';
import { useEffect } from 'react';
import { useState } from 'react';
import useToastStore from '../../../stores/toastStore';

const toLocalISOString = (date) => {
  const tzOffset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localISOTime = new Date(date - tzOffset).toISOString().slice(0, 16);
  return localISOTime;
};

const DateChangeModal = ({ content, updateTaskItems, currentUser, id, startAt, endAt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleShowToastMessage } = useToastStore();

  const startDate = new Date(startAt);
  const endDate = new Date(endAt);

  const timeDiffInMilliseconds = endDate - startDate;
  const timeDiffInMinutes = timeDiffInMilliseconds / (1000 * 60);

  const hours = Math.floor((timeDiffInMinutes % (24 * 60)) / 60);
  const minutes = Math.floor(timeDiffInMinutes % 60);

  const [changeTime, setChangeTime] = useState({ hours: 0, minutes: 0 });

  const handleSubmit = () => {
    const adjustedEndDate = new Date(
      endDate.getTime() + changeTime.hours * 60 * 60 * 1000 + changeTime.minutes * 60 * 1000,
    );
    const formattedData = {
      startAt: toLocalISOString(startDate),
      endAt: toLocalISOString(adjustedEndDate),
    };
    patchDateChange(currentUser.memberId, id, formattedData);
    handleShowToastMessage('업무 시간 수정 완료!');
    updateTaskItems({ id, startAt: formattedData.startAt, endAt: formattedData.endAt });
    onClose();
  };

  useEffect(() => {
    setChangeTime({ hours: 0, minutes: 0 });
  }, [isOpen]);

  return (
    <>
      <Button
        paddingX='75px'
        paddingY='13px'
        variant='greenWhite'
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
              <Flex direction='column'>
                <Box className='SubHead-xl'>
                  {endDate.getFullYear() + 1}.{endDate.getMonth() + 1}.{endDate.getDate()}
                </Box>
                <Box className='Display-sm' textColor='#059669'>
                  {hours}시간 {minutes}분
                </Box>
                <Box>{content}</Box>
              </Flex>
              <Flex direction='column' gap='28px'>
                <Flex direction='column' gap='18px'>
                  <Box className='Headline-lg'>시간</Box>
                  <Flex justifyContent='space-between'>
                    <Flex
                      border='1px solid #CCD6E3'
                      height='52px'
                      alignItems='center'
                      borderRadius='4px'
                    >
                      <Flex
                        width='52px'
                        height='52px'
                        justifyContent='center'
                        alignItems='center'
                        borderRight='1px solid #CCD6E3'
                        onClick={() => {
                          setChangeTime((prev) => ({ ...prev, hours: prev.hours - 1 }));
                        }}
                      >
                        -
                      </Flex>
                      <Input
                        border='none'
                        className='Headline-lg'
                        width='100px'
                        textAlign='center'
                        value={changeTime.hours}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^-?\d*$/.test(value)) {
                            setChangeTime((prev) => ({
                              ...prev,
                              hours: value === '-' ? value : Number(value),
                            }));
                          }
                        }}
                      />
                      <Flex
                        width='52px'
                        height='52px'
                        justifyContent='center'
                        alignItems='center'
                        borderLeft='1px solid #CCD6E3'
                        onClick={() => {
                          setChangeTime((prev) => ({ ...prev, hours: prev.hours + 1 }));
                        }}
                      >
                        +
                      </Flex>
                    </Flex>
                    <Box
                      className='Display-sm'
                      textColor={
                        changeTime.hours > 0
                          ? '#2563EB'
                          : changeTime.hours === 0
                            ? 'black'
                            : '#DC2626'
                      }
                    >
                      {changeTime.hours}시간
                    </Box>
                  </Flex>
                </Flex>
                <Flex direction='column' gap='18px'>
                  <Box className='Headline-lg'>분</Box>
                  <Flex justifyContent='space-between'>
                    <Flex
                      border='1px solid #CCD6E3'
                      height='52px'
                      alignItems='center'
                      borderRadius='4px'
                    >
                      <Flex
                        width='52px'
                        height='52px'
                        justifyContent='center'
                        alignItems='center'
                        borderRight='1px solid #CCD6E3'
                        onClick={() => {
                          setChangeTime((prev) => ({ ...prev, minutes: prev.minutes - 10 }));
                        }}
                      >
                        -
                      </Flex>
                      <Input
                        border='none'
                        className='Headline-lg'
                        width='100px'
                        textAlign='center'
                        value={changeTime.minutes}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^-?\d*$/.test(value)) {
                            setChangeTime((prev) => ({
                              ...prev,
                              minutes: value === '-' ? value : Number(value),
                            }));
                          }
                        }}
                      />
                      <Flex
                        width='52px'
                        height='52px'
                        justifyContent='center'
                        alignItems='center'
                        borderLeft='1px solid #CCD6E3'
                        onClick={() => {
                          setChangeTime((prev) => ({ ...prev, minutes: prev.minutes + 10 }));
                        }}
                      >
                        +
                      </Flex>
                    </Flex>
                    <Box
                      className='Display-sm'
                      textColor={
                        changeTime.minutes > 0
                          ? '#2563EB'
                          : changeTime.minutes === 0
                            ? 'black'
                            : '#DC2626'
                      }
                    >
                      {changeTime.minutes}분
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
              <Box w='full' height='1px' background='#CCD6E3' />
              <Flex alignItems='center' justifyContent='space-between'>
                <Box className='SubHead-xl'>수정된 시간</Box>
                {changeTime.hours !== '-' && changeTime.minutes !== '-' ? (
                  <Box
                    className='Display-sm'
                    textColor={
                      hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) < 0
                        ? '#DC2626'
                        : 'black'
                    }
                  >
                    {Math.floor(
                      (hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes)) / 60,
                    )}
                    시간
                    {(hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes)) % 60}분
                  </Box>
                ) : (
                  <Box className='Display-sm'> 시간 분</Box>
                )}
              </Flex>
              <Button
                onClick={handleSubmit}
                variant='greenWhite'
                className='SubHead-xl'
                background={
                  hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) >= 0
                    ? '#059669'
                    : '#E2E8F0'
                }
                color={
                  hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) >= 0
                    ? 'white'
                    : '#A0AEC0'
                }
                _hover={{
                  background:
                    hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) >= 0
                      ? '#059669'
                      : '#E2E8F0',
                  color:
                    hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) >= 0
                      ? 'white'
                      : '#A0AEC0',
                }}
                isDisabled={hours * 60 + changeTime.hours * 60 + (minutes + changeTime.minutes) < 0}
              >
                수정 완료
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

DateChangeModal.propTypes = {
  updateTaskItems: PropTypes.func,
  currentUser: PropTypes.object,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default DateChangeModal;
