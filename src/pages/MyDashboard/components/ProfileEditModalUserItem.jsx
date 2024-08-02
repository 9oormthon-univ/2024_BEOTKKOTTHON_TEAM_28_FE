import { Box, Button, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import patchManager from '../../../api/manage/patchManager';
import { returnProfileImg } from '../../../lips/returnProfile';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useToastStore from '../../../stores/toastStore';

const ProfileEditModalUserItem = ({ memberId, nickname, profileImage, isLeader }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { handleShowToastMessage } = useToastStore();

  const handleClick = () => {
    try {
      patchManager(id, memberId);

      handleShowToastMessage('권한 위임 완료!');
      navigate(`/${id}/team-task-history`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex direction='column' gap='12px' alignItems='flex-start'>
      <Flex gap='8px' alignItems='center'>
        <Image borderRadius='50%' src={returnProfileImg(profileImage)} alt='프로필' width='48px' />
        <Flex>
          <Box>{nickname}</Box>
        </Flex>
      </Flex>
      {isLeader ? (
        <Button className='SubHead-lg' paddingX='16px' background='gray.200' isDisabled>
          현재 리더 입니다
        </Button>
      ) : (
        <Button className='SubHead-lg' paddingX='16px' variant='grayWhite' onClick={handleClick}>
          권한 위임
        </Button>
      )}
    </Flex>
  );
};

ProfileEditModalUserItem.propTypes = {
  onClick: PropTypes.func,
  memberId: PropTypes.number,
  nickname: PropTypes.string,
  profileImage: PropTypes.string,
  isLeader: PropTypes.bool,
};

export default ProfileEditModalUserItem;
