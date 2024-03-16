import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
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

import ProfileEditModalUserItem from './ProfileEditModalUserItem';
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
        <ModalContent borderRadius='16px' minWidth='fit-content'>
          <ModalCloseButton />
          <ModalHeader>
            <Flex justifyContent='space-between' paddingY='40px' background='gray.100'>
              <label>프로필 수정</label>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                저장하기
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex direction='column' paddingX='64px' gap='32px'>
              <Flex direction='column'>
                <label className='Haedline-lg'>프로필 변경</label>
                <Flex gap='8px'>
                  <img src={blueberry} alt='프로필 이미지' width='120px' />
                  <img src={cabbage} alt='프로필 이미지' width='120px' />
                  <img src={carrot} alt='프로필 이미지' width='120px' />
                  <img src={cucumber} alt='프로필 이미지' width='120px' />
                  <img src={strawberry} alt='프로필 이미지' width='120px' />
                  <img src={tomato} alt='프로필 이미지' width='120px' />
                </Flex>
              </Flex>
              <Divider />
              <Box>
                <Flex direction='column'>
                  <label className='Haedline-lg'>이름 수정</label>
                  <Input width='342px' />
                </Flex>
              </Box>
              <Divider />
              <Box>
                <Flex direction='column'>
                  <label className='Haedline-lg'>권한 변경</label>
                  <Grid templateColumns='repeat(4, 1fr)' gap='40px'>
                    <ProfileEditModalUserItem />
                    <ProfileEditModalUserItem />
                    <ProfileEditModalUserItem />
                    <ProfileEditModalUserItem />
                    <ProfileEditModalUserItem />
                    <ProfileEditModalUserItem />
                  </Grid>
                </Flex>
              </Box>
            </Flex>
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
