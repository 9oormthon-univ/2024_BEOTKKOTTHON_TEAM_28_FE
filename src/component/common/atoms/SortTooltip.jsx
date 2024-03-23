import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SortTooltip = ({ sort, isSelected, onSelect }) => {
  return (
    <Box
      borderRadius='999px'
      paddingY='6px'
      paddingX='16px'
      onClick={onSelect}
      border={isSelected ? '1px solid #475569' : '1px solid #CCD6E3'}
      color={isSelected ? '#475569' : '#CCD6E3'}
    >
      {sort}
    </Box>
  );
};

SortTooltip.propTypes = {
  sort: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default SortTooltip;
