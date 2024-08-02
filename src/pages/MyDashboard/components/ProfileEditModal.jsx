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
import { useEffect, useState } from 'react';

import ProfileImageSelect from './ProfileImageSelect';
import PropTypes from 'prop-types';
import postUserInfo from '../../../api/dashboard/patchUserInfo';
import { returnProfileImg } from '../../../lips/returnProfile';
import { returnVegi } from '../../../lips/returnVegi';
import useUserStore from '../../../stores/userStore';

const ProfileEditModal = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState(data);
  const [error, setError] = useState('');

  const { userId, handleProfile } = useUserStore();

  useEffect(() => {
    setBody(data);
  }, [data]);

  const handleClick = async () => {
    try {
      const { profileImage, nickname } = body;

      if (!nickname) {
        setError('닉네임을 입력해주세요.');
        return;
      }

      const userData = {
        profileImage: profileImage ? returnVegi(profileImage) : null,
        nickname: nickname ?? data.nickname,
      };

      const response = await postUserInfo(userData);

      const responseData = response?.data;

      handleProfile({
        userId,
        profileImage: responseData?.profileImage ?? userData.profileImage,
        userName: responseData?.nickname ?? userData.nickname,
      });

      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (string) => {
    setBody((prev) => ({ ...prev, profileImage: returnProfileImg(string) }));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBody((prev) => ({ ...prev, nickname: value }));

    if (value === '') {
      setError('변경할 닉네임을 작성해주세요.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <Button variant='greenGreen' w='100%' onClick={onOpen}>
        프로필 수정하기
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='16px' minWidth='fit-content' position='absolute' top='60px'>
          <ModalCloseButton position='absolute' right='8px' top='-50px' w='32px' color='white' />
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
                <Flex direction='column'>
                  <label className='Headline-lg'>이름 수정</label>
                  <Input
                    width='342px'
                    mt='8px'
                    value={body?.nickname ?? ''}
                    onChange={handleInputChange}
                    maxLength={8}
                    isInvalid={!!error}
                  />
                  {error && (
                    <Box color='red.500' mt='8px'>
                      {error}
                    </Box>
                  )}
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

ProfileEditModal.propTypes = {
  data: PropTypes.object,
};

export default ProfileEditModal;
