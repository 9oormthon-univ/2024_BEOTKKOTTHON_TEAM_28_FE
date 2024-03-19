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
  useDisclosure,
} from '@chakra-ui/react';

import ContributionModalItem from './ContributionModalItem';
import cucumber from '../../assets/cucumber.png';

const ContributionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button color='brandBold' background='transparent' onClick={onOpen}>
        더보기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content'>
          <ModalCloseButton />
          <ModalBody padding='64px'>
            <Flex direction='column' alignItems='flex-start' gap='40px'>
              <Flex alignItems='center' justifyContent='space-between' width='full'>
                <Flex gap='16px' alignItems='center'>
                  <Image src={cucumber} alt='팀 프로필' width='120px' />
                  <Flex direction='column' width='383px'>
                    <Box className='Display-sm'>프로젝트 A</Box>
                    <Box className='Body-xl'>2024.03.07 - 24.03.24</Box>
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
                      <Box className='Display-sm'>100시간</Box>
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
                      <Box className='Display-sm'>디자인</Box>
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
                  <Box color='brandBold' className='Headline-md'>
                    동료 평가 제목
                  </Box>
                  <Box className='Body-lg'>동료평가 내용입니다</Box>
                </Flex>
              </Flex>
              <Flex direction='column' gap='20px'>
                <Box className='Display-sm'>R&R</Box>
                <ContributionModalItem />
                <ContributionModalItem />
                <ContributionModalItem />
                <ContributionModalItem />
                <ContributionModalItem />
              </Flex>
              <Button variant='grayWhite' width='200px'>
                비공개 전환
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContributionModal;
