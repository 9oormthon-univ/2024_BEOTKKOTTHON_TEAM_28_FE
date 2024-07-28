import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TimeTag = ({ createdAt }) => {
  const today = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = Math.floor((today - createdDate) / (1000 * 60 * 60));
  return timeDifference === 0 ? (
    <Box className='Body-md' textColor='#475569'>
      몇 분 전
    </Box>
  ) : (
    <Box className='Body-md' textColor='#475569'>
      {timeDifference >= 24 && `${Math.floor(timeDifference / 24)}일 `}
      {timeDifference % 24 !== 0 && `${timeDifference % 24}시간 `}전
    </Box>
  );
};

TimeTag.propTypes = {
  createdAt: PropTypes.string,
};

export default TimeTag;
