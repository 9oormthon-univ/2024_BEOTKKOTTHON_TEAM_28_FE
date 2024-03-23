import { Flex, Image } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import { returnProfileImg } from '../../../lips/returnProfile';
import { useNavigate } from 'react-router-dom';

const MemberItem = ({
  currentUser,
  handleCurrentUser,
  active,
  memberId,
  part,
  profileImage,
  nickname,
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      gap='8px'
      alignItems='center'
      onClick={() => {
        if (handleCurrentUser) {
          handleCurrentUser({ name: nickname, profile: profileImage, part, memberId });
        } else {
          navigate(`/user/${memberId}`);
        }
      }}
      background={currentUser?.name === nickname && 'pink'}
    >
      <Image borderRadius='50%' src={returnProfileImg(profileImage)} alt='프로필' width='48px' />
      <div>{nickname}</div>
      <PartTag part={part} active={active ?? false} />
    </Flex>
  );
};

MemberItem.propTypes = {
  active: PropTypes.bool,
  memberId: PropTypes.number,
  part: PropTypes.string,
  profileImage: PropTypes.string,
  nickname: PropTypes.string,
  handleCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};

export default MemberItem;
