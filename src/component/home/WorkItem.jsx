import { Box, Divider, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { TitleProfile } from '../common/mocules';

const WorkItem = ({ content, createdAt, profileImage, nickname, part }) => {
  return (
    <Flex direction='column' gap='20px'>
      <TitleProfile
        nickname={nickname}
        profileImage={profileImage}
        createdAt={createdAt}
        part={part}
      />
      <Box
        className='Body-lg'
        color='tertiary'
        paddingX='24px'
        paddingY='16px'
        background='gray.100'
      >
        {content}
      </Box>
      <Divider />
    </Flex>
  );
};

WorkItem.propTypes = {
  content: PropTypes.string,
  part: PropTypes.string,
  createdAt: PropTypes.string,
  profileImage: PropTypes.string,
  nickname: PropTypes.string,
};

export default WorkItem;
