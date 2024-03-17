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

import cucumber from '../../assets/cucumber.png';

const ContributionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant='greenGreen' onClick={onOpen}>
        더보기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content'>
          <ModalCloseButton />
          <ModalBody padding='64px'>
            <Flex alignItems='center' gap='16px'>
              <img src={cucumber} alt='팀 프로필' width='120px' />
              <Flex direction='column' width='383px'>
                <Box className='Display-sm'>프로젝트 A</Box>
                <Box className='Body-xl'>2024.03.07 - 24.03.24</Box>
              </Flex>
              <Flex direction='column'>
                <Flex borderRadius='12px' background='gray.100'>
                  <Flex direction='column' justifyContent='center' paddingX='63px' paddingY='20px'>
                    <Box>참여시간</Box>
                    <Box>100시간</Box>
                  </Flex>
                  <Flex direction='column' justifyContent='center' paddingX='63px' paddingY='20px'>
                    <Box>직무</Box>
                    <Box>디자인</Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Box>비공개 전환</Box>
              <div>토글</div>
            </Flex>
            <Box className='Display-sm'>동료 평가</Box>
            <Box paddingX='24px' paddingY='16px' background='gray.100'>
              디테일한 사항에 대한 내용들
            </Box>
            <Box className='Display-sm'>R&R</Box>
            <Box paddingX='24px' paddingY='16px' background='gray.100'>
              디테일한 사항에 대한 내용들
            </Box>
            <Box paddingX='24px' paddingY='16px' background='gray.100'>
              디테일한 사항에 대한 내용들
            </Box>
            <Box paddingX='24px' paddingY='16px' background='gray.100'>
              디테일한 사항에 대한 내용들
            </Box>
            <Box paddingX='24px' paddingY='16px' background='gray.100'>
              디테일한 사항에 대한 내용들
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContributionModal;
