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

// import { useState } from 'react';

const DateChangeModal = ({ startAt, endAt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [data, useData]=useState()
  console.log(startAt, endAt);
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
              <Box>{'username'}님의 시간을 수정해주세요</Box>
              <Flex>
                <Button>-30분</Button>
                <Button>-1시간</Button>
                <Button>-6시간</Button>
              </Flex>
              <Box>
                {'2024 / 03 / 24 HH:MM'}-{'2024 / 03 / 24 HH:MM'}
              </Box>
              <Button>선택 완료</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

DateChangeModal.propTypes = {
  startAt: PropTypes.string,
  endAt: PropTypes.string,
};

export default DateChangeModal;
