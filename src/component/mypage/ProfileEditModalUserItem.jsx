import { Box, Button, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { returnProfileImg } from '../../lips/returnProfile';

const ProfileEditModalUserItem = ({ onClick, memberId, nickname, profileImage, isLeader }) => {
  return (
    <Flex direction='column' gap='12px' alignItems='flex-start'>
      <Flex gap='8px' alignItems='center'>
        <Image borderRadius='50%' src={returnProfileImg(profileImage)} alt='프로필' width='48px' />
        <Flex>
          <Box>{nickname}</Box>
        </Flex>
      </Flex>
      {isLeader ? (
        <Button className='SubHead-lg' paddingX='16px' background='gray.200'>
          리더 입니다
        </Button>
      ) : (
        <Button
          className='SubHead-lg'
          paddingX='16px'
          variant='grayWhite'
          onClick={() => {
            onClick(memberId);
          }}
        >
          권한 위임
        </Button>
      )}
    </Flex>
  );
};

ProfileEditModalUserItem.propTypes = {
  onClick: PropTypes.func,
  memberId: PropTypes.string,
  nickname: PropTypes.string,
  profileImage: PropTypes.string,
  isLeader: PropTypes.bool,
};

export default ProfileEditModalUserItem;
