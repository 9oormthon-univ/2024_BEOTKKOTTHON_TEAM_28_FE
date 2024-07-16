import { Box, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { returnProfileImg } from '../../../lips/returnProfile';

const QuestionItem = ({ isBlank, id, profileImage, questionContent, part }) => {
  if (isBlank)
    return (
      <Flex gap='8px' key={id}>
        <Image borderRadius='50%' src={returnProfileImg('CUCUMBER')} alt='프로필' width='48px' />
        <Flex direction='column'>
          <Box className='SubHead-lg'>질문이 없어요.</Box>
          <Box className='SubHead-md' color='brandBold'>
            요청 직군
          </Box>
        </Flex>
      </Flex>
    );

  return (
    <Flex gap='8px' key={id}>
      <Image borderRadius='50%' src={profileImage} alt='프로필' width='48px' />
      <Flex direction='column'>
        <Box className='SubHead-lg'>{questionContent}</Box>
        <Box className='SubHead-md' color='brandBold'>
          {part}
        </Box>
      </Flex>
    </Flex>
  );
};
QuestionItem.propTypes = {
  isBlank: PropTypes.bool,
  id: PropTypes.number,
  profileImage: PropTypes.string,
  questionContent: PropTypes.string,
  part: PropTypes.string,
};

export default QuestionItem;
