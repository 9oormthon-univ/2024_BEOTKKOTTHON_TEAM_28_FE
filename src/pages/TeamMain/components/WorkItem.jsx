import { Box, Divider, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { TitleProfile } from '../../../components/molecules';

const WorkItem = ({ content, createdAt, profileImage, nickname, part }) => {
  if (!content) return null;
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
        background='#F0F2F4'
        borderRadius='4px'
        border='1px solid #CCD6E3'
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
