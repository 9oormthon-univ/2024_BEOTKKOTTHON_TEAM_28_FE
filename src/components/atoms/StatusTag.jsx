import { Box, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const switchStatus = (status) => {
  switch (status) {
    case 'IN_PROGRESS':
      return { string: '진행중', color: '#059669' };
    case 'PEER_REVIEW':
      return { string: '리뷰 작성', color: '#991B1B' };
    case 'FINISH':
      return { string: '완료', color: '#1E40AF' };

    default:
      return { string: '진행중', color: '#059669' };
  }
};
const StatusTag = ({ status, onClick }) => {
  const switchedStatus = switchStatus(status);
  return (
    <Flex
      cursor={status === 'PEER_REVIEW' ? 'pointer' : ''}
      onClick={onClick}
      border={`2px solid ${switchedStatus.color}`}
      color={switchedStatus.color}
      paddingX='16px'
      paddingY='8px'
      borderRadius='4px'
      width='112px'
      justifyContent='center'
    >
      <Flex gap='8px' alignItems='center'>
        <Box>{switchedStatus.string}</Box>
        <Box background={switchedStatus.color} width='8px' height='8px' borderRadius='50%' />
      </Flex>
    </Flex>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func,
};
export default StatusTag;
