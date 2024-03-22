import { Box, Flex, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { StatusTag } from '../common/atoms';

// import RnRModal from './RnRModal';

const ProjectItem = ({ name, summary, profileImage, startAt, endAt, status }) => {
  return (
    <Flex direction='column' gap='12px'>
      <Box className='SubHead-xl' color='brandBold'>
        {startAt} - {endAt}
      </Box>
      <Flex
        w='100%'
        background='gray.100'
        alignItems='center'
        paddingY='24px'
        paddingX='32px'
        gap='20px'
        borderRadius='12px'
      >
        <img
          src={profileImage ?? '/tomato.png'}
          alt={`${name}의 팀프로필`}
          width='80px'
          height='80px'
        />
        <Flex flex='1' direction='column' gap='18px'>
          <Text className='Headline-lg'>{name}</Text>
          <div>{summary ?? '아직 요약이 없어요!'}</div>
        </Flex>
        <Flex direction='column' gap='6px'>
          <StatusTag status={status} />
          {/* <RnRModal /> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string,
  profileImage: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  status: PropTypes.string,
};

export default ProjectItem;
