import { Box, Flex, Image } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import { returnProfileImg } from '../../../lips/returnProfile';

const TitleProfile = ({ isNoTime = false, right, part, createdAt, profileImage, nickname }) => {
  const today = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = Math.floor((today - createdDate) / (1000 * 60 * 60));
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Flex gap='8px' alignItems='center'>
        <Image borderRadius='50%' src={returnProfileImg(profileImage)} alt='프로필' width='48px' />
        <Flex direction='column'>
          <Flex gap='8px'>
            <Box className='Headline-lg'>{nickname}</Box>
            <PartTag part={part} active={true} />
          </Flex>
          {!isNoTime && <Box className='Body-md'>{timeDifference} 시간 전</Box>}
        </Flex>
      </Flex>
      {right ?? null}
    </Flex>
  );
};

TitleProfile.propTypes = {
  right: PropTypes.node,
  isNoTime: PropTypes.bool,
  part: PropTypes.string,
  createdAt: PropTypes.string,
  profileImage: PropTypes.string,
  nickname: PropTypes.string,
};

export default TitleProfile;
