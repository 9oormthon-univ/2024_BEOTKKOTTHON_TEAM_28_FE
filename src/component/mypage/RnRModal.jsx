import {
  Box,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import saveSVG from '../../assets/save.svg';

const RnRModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                스타트업 밸리를 진행하면서
                <br />
                팀원분들과의 어떠셨나요?
              </Box>
              <Box color='brandBold'>
                * 동료 평가를 진행하지 않으면, 본인의 평가를 확인할 수 없어요
              </Box>
              <Box marginY='24px' className='SubHead-xl'>
                스타트업 밸리의 멤버 정아현
              </Box>
            </Flex>
            <Flex direction='column'>
              <Box width='550px'>프로필</Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex direction='column' width='100%' gap='24px'>
              <Divider />
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

export default RnRModal;
