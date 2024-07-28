import { Flex, Image } from '@chakra-ui/react';

import PartTag from '../atoms/PartTag';
import PropTypes from 'prop-types';
import { returnProfileImg } from '../../lips/returnProfile';
import { useNavigate } from 'react-router-dom';

const MemberItem = ({
  isDisableMove,
  currentUser,
  handleCurrentUser,
  active,
  memberId,
  part,
  profileImage,
  nickname,
  isBlank,
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      gap='8px'
      alignItems='center'
      onClick={() => {
        if (handleCurrentUser) {
          handleCurrentUser({ name: nickname, profile: profileImage, part, memberId });
        } else if (isDisableMove) {
          return;
        } else {
          navigate(`/user/${memberId}`);
        }
      }}
      background={!currentUser?.name === nickname && '#ECFDF5'}
      border={!currentUser?.name === nickname && '1px solid #059669'}
      padding='5px'
      borderRadius='5px'
    >
      <Image
        borderRadius='50%'
        src={isBlank ? returnProfileImg('TOMATO') : returnProfileImg(profileImage)}
        alt='프로필'
        width='48px'
      />
      <div>{isBlank ? '팀원이 없어요' : nickname}</div>
      {!isBlank && <PartTag part={part} active={active ?? false} />}
    </Flex>
  );
};

MemberItem.propTypes = {
  isBlank: PropTypes.bool,
  isDisableMove: PropTypes.bool,
  active: PropTypes.bool,
  memberId: PropTypes.number,
  part: PropTypes.string,
  profileImage: PropTypes.string,
  nickname: PropTypes.string,
  handleCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};

export default MemberItem;
