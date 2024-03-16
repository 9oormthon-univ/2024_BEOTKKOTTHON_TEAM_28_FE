import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import blueberry from '../../assets/blueberry.png';
import cabbage from '../../assets/cabbage.png';
import carrot from '../../assets/carrot.png';
import cucumber from '../../assets/cucumber.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';

const ProfileEditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant='greenGreen' w='100%' onClick={onOpen}>
        프로필 수정하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px'>
          <ModalHeader background='gray.100'>
            <Flex justifyContent='space-between'>
              <label>프로필 수정</label>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                저장하기
              </Button>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column'>
              <label className='Haedline-lg'>프로필 변경</label>
              <Flex>
                <img src={blueberry} alt='프로필 이미지' width='120px' />
                <img src={cabbage} alt='프로필 이미지' width='120px' />
                <img src={carrot} alt='프로필 이미지' width='120px' />
                <img src={cucumber} alt='프로필 이미지' width='120px' />
                <img src={strawberry} alt='프로필 이미지' width='120px' />
                <img src={tomato} alt='프로필 이미지' width='120px' />
              </Flex>
            </Flex>
            <Box>
              <Flex direction='column'>
                <label className='Haedline-lg'>이름 수정</label>
                <Input />
              </Flex>
            </Box>
            <Box>
              <Flex direction='column'>
                <label className='Haedline-lg'>권한 변경</label>
                <div>유저</div>
                <div>유저</div>
                <div>유저</div>
                <div>유저</div>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              서비스 탈퇴
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileEditModal;
