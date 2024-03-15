import {
  Box,
  Button,
  Flex,
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
        <ModalContent>
          <ModalHeader>
            <label>프로필 수정</label>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              저장하기
            </Button>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex>
                <label>프로필 변경</label>
                <img src={blueberry} alt='프로필 이미지' />
                <img src={cabbage} alt='프로필 이미지' />
                <img src={carrot} alt='프로필 이미지' />
                <img src={cucumber} alt='프로필 이미지' />
                <img src={strawberry} alt='프로필 이미지' />
                <img src={tomato} alt='프로필 이미지' />
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
