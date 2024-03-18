import { Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PartTag = ({ part, active }) => {
  return (
    <Badge
      className='SubHead-sm'
      color={active ? '#059669' : 'tertiary'}
      background={active ? 'transparent' : '#F0F2F4'}
      border={`1px solid ${active ? '#059669' : '#64748B'}`}
      borderRadius='14px'
      paddingY='4px'
      paddingX='8px'
    >
      {part}
    </Badge>
  );
};

PartTag.propTypes = {
  part: PropTypes.string,
  active: Boolean,
};

export default PartTag;
