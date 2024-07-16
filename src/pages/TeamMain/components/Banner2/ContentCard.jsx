import { Box, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const ContentCard = ({ isConnected }) => {
  return (
    <Flex
      padding='24px 57px 74px 24px'
      borderRadius='8.899px'
      gap='20px'
      direction='column'
      backgroundColor='#F0F2F4'
      width='292px'
      height='262px'
    >
      <Box className='Display-sm' textColor='#065F46'>
        2024.03.14
      </Box>
      {!isConnected ? (
        <Box className='Display-sm'>스타트업밸리로 다른 사람들과 함께 업무를 진행해봐요!</Box>
      ) : (
        <>
          <div>2024.03.14</div>
          <div>스타트업밸리팀</div>
        </>
      )}
    </Flex>
  );
};

ContentCard.propTypes = {
  isConnected: PropTypes.bool,
};

export default ContentCard;
