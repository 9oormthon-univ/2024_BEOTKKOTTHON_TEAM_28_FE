import { Box, Flex } from '@chakra-ui/react';

import PartTag from '../../../components/atoms/PartTag';
import PropTypes from 'prop-types';
import TimeTag from '../../../components/atoms/TimeTag';

const CommentItem = ({ receiver }) => {
  return (
    <Flex direction='column' marginLeft='40px' gap='12px'>
      <Flex direction='column'>
        <Flex alignItems='center' gap='8px'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.4997 10.3333L18.6663 14.5M18.6663 14.5L14.4997 18.6667M18.6663 14.5H8.66634C7.78229 14.5 6.93444 14.1488 6.30932 13.5237C5.6842 12.8986 5.33301 12.0507 5.33301 11.1667V5.33333'
              stroke='#059669'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <Box className='Headline-lg'>@{receiver.name}</Box>
          <PartTag part={receiver.part} active />
        </Flex>
        <TimeTag createdAt={receiver.createdAt} />
      </Flex>
      <Box paddingX='24px' paddingY='16px' borderRadius='4px' border='1px solid #CCD6E3'>
        {receiver.content}
      </Box>
    </Flex>
  );
};

CommentItem.propTypes = {
  receiver: PropTypes.object,
};

export default CommentItem;
