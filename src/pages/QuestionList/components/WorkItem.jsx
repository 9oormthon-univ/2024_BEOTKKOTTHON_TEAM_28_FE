import { Box, Divider, Flex } from '@chakra-ui/react';

import CommentItem from './CommentItem';
import PropTypes from 'prop-types';
import { TitleProfile } from '../../../components/molecules';

const WorkItem = ({ name, profileImage, part, content, createdAt, receiver }) => {
  return (
    <Flex direction='column' gap='20px' paddingY='24px'>
      <TitleProfile part={part} createdAt={createdAt} profileImage={profileImage} nickname={name} />
      <Box
        paddingX='24px'
        paddingY='16px'
        background='#F0F2F4'
        borderRadius='4px'
        border='1px solid #CCD6E3'
      >
        {content}
      </Box>
      {receiver && <CommentItem receiver={receiver} />}
      <Divider />
    </Flex>
  );
};

WorkItem.propTypes = {
  name: PropTypes.string,
  profileImage: PropTypes.string,
  part: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  receiver: PropTypes.shape({
    name: PropTypes.string,
    profileImage: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default WorkItem;
