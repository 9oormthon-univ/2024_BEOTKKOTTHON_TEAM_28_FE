import { Box, Divider, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { TitleProfile } from '../common/mocules';
import { returnProfileImg } from '../../lips/returnProfile';

const WorkItem = ({ name, profileImage, part, content, createdAt, receiver }) => {
  return (
    <Flex direction='column' gap='20px' paddingY='24px'>
      <TitleProfile part={part} createdAt={createdAt} profileImage={profileImage} nickname={name} />
      <Box paddingX='24px' paddingY='16px' background='#F0F2F4' borderRadius='4px'>
        {content}
      </Box>

      <Flex direction='column'>
        <Flex alignItems='center'>
          <Image
            borderRadius='50%'
            src={returnProfileImg(receiver?.profileImage)}
            alt='프로필'
            width='32px'
          />
          <Box paddingX='24px' paddingY='16px' borderRadius='4px'>
            {`${receiver?.name} `}
            {receiver?.content}
          </Box>
        </Flex>
        {/* <Flex gap='12px'>
            <Input placeholder='오늘은 어떤 작업을 진행하셨나요?' />
            <Button background='#059669' color='white'>
              전송
            </Button>
          </Flex> */}
      </Flex>

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
