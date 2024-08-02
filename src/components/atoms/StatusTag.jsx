import { Box, Flex, Img } from '@chakra-ui/react';

import PropTypes from 'prop-types';

import Ballon from '../../assets/ballon.svg';

const switchStatus = (status) => {
  switch (status) {
    case 'IN_PROGRESS':
      return { string: '진행중', color: '#065F46', border: '#059669', round: '#10B981' };
    case 'PEER_REVIEW':
      return { string: '리뷰 작성', color: '#991B1B', border: '#DC2626', round: '#991B1B' };
    case 'FINISH':
      return { string: '완료', color: '#1E40AF', border: '#2563EB', round: '#3B82F6' };

    default:
      return { string: '진행중', color: '#059669', border: '#059669', round: '#10B981' };
  }
};
const StatusTag = ({ status, onClick }) => {
  const switchedStatus = switchStatus(status);
  return (
    <Flex
      cursor={status === 'PEER_REVIEW' ? 'pointer' : ''}
      onClick={onClick}
      border={`2px solid ${switchedStatus.border}`}
      color={switchedStatus.color}
      paddingX='8px'
      paddingY='8px'
      borderRadius='4px'
      width='112px'
      justifyContent='center'
      boxSizing='border-box'
    >
      <Flex gap='8px' alignItems='center'>
        <Box fontSize='16px'>{switchedStatus.string}</Box>
        {status === 'PEER_REVIEW' ? (
          <Img src={Ballon} />
        ) : (
          <Box background={switchedStatus.round} width='8px' height='8px' borderRadius='50%' />
        )}
      </Flex>
    </Flex>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func,
};
export default StatusTag;
