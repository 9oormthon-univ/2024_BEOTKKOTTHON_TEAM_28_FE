import { Flex, Image } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import { returnProfileImg } from '../../../lips/returnProfile';

const MemberItem = ({ active, memberId, part, profileImage, nickname }) => {
  // TODO
  console.log(memberId);

  return (
    <Flex gap='8px' alignItems='center'>
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
};

export default MemberItem;
