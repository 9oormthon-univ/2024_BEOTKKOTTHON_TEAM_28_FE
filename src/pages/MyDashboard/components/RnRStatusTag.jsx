import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const RnRStatusTag = ({ isDone }) => {
  if (isDone)
    return (
      <Box
        className='SubHead-sm'
        color='success'
        background='#ECFDF5'
        paddingX='8px'
        paddingY='4px'
        borderRadius='14px'
      >
        평가 완료
      </Box>
    );
  return (
    <Box
      className='SubHead-sm'
      color='#991B1B'
      background='#FEF2F2'
      paddingX='8px'
      paddingY='4px'
      borderRadius='14px'
    >
      평가 미완료
    </Box>
  );
};
RnRStatusTag.propTypes = {
  isDone: PropTypes.bool.isRequired,
};
export default RnRStatusTag;
