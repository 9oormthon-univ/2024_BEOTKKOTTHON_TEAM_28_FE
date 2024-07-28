import { Box, Flex } from '@chakra-ui/react';

import ContentMember from './ContentMember';
import PropTypes from 'prop-types';
import { returnProfileImg } from '../../../../lips/returnProfile';

const ContentMembers = ({ members }) => {
  return (
    <Flex direction='column' gap='14px'>
      <Box className='SubHead-lg'>
        현재 업무 진행중인 멤버 <span style={{ color: '#065F46' }}>{members.length}</span>
      </Box>
      <Flex gap='10px'>
        {members.map(({ id, nickname, profileImage, part }) => (
          <ContentMember
            key={id}
            profile={returnProfileImg(profileImage)}
            username={nickname}
            part={part ?? ''}
          />
        ))}
      </Flex>
    </Flex>
  );
};

ContentMembers.propTypes = {
  members: PropTypes.array,
};
export default ContentMembers;
