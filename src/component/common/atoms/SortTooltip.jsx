import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SortTooltip = ({ sort }) => {
  return (
    <Box
      border='1px solid gray'
      borderRadius='999px'
      paddingY='6px'
      paddingX='16px'
      colorscheme='blue'
    >
      {sort}
    </Box>
  );
};

SortTooltip.propTypes = {
  sort: PropTypes.string,
};

export default SortTooltip;
