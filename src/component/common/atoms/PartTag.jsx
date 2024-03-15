import { Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PartTag = ({ part, active }) => {
  return <Badge colorScheme={active ? 'red' : 'green'}>{part}</Badge>;
};

PartTag.propTypes = {
  part: PropTypes.string,
  active: Boolean,
};

export default PartTag;
