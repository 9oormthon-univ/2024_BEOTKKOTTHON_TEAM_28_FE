import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import ProfileImageSelect from './ProfileImageSelect';
import postUserInfo from '../../api/dashboard/patchUserInfo';
import { useState } from 'react';

const ProfileEditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState();

  const handleClick = () => {
    postUserInfo(body);
    onClose();
  };

  const handleImage = (string) => {
    setBody((prev) => ({ ...prev, profileImage: string }));
  };

  return (
    <>
      <Button variant='greenGreen' w='100%' onClick={onOpen}>
        프로필 수정하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content'>
          <ModalCloseButton />
          <ModalBody position='relative'>
            <Flex
              top='0'
              right='0'
              left='0'
              position='absolute'
              justifyContent='space-between'
              borderTopRadius='16px'
              background='#F0F2F4'
              paddingX='40px'
              paddingY='32px'
            >
              <label className='Display-sm'>프로필 수정</label>
              <Button width='200px' background='#059669' color='white' mr={3} onClick={handleClick}>
                저장하기
              </Button>
            </Flex>
            <Flex
              direction='column'
              marginTop='127px'
              paddingX='64px'
              paddingBottom='64px'
              gap='32px'
            >
              <Flex direction='column' gap='20px'>
                <label className='Headline-lg'>프로필 변경</label>
                <ProfileImageSelect currentImage={body?.profileImage} handleImage={handleImage} />
              </Flex>
              <Divider />
              <Box>
                <Flex direction='column' gap='20px'>
                  <label className='Headline-lg'>이름 수정</label>
                  <Input
                    width='342px'
                    value={body?.nickname ?? ''}
                    onChange={(e) => {
                      setBody((prev) => ({ ...prev, nickname: e.target.value }));
                    }}
                  />
                </Flex>
              </Box>
              <Divider />

              <Button width='200px' background='#475569' color='white' mr={3} onClick={onClose}>
                서비스 탈퇴
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileEditModal;
