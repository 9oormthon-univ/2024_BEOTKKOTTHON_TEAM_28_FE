import { Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { changePartToKr } from '../../lips/changePartToKr';

const PartTag = ({ part, active = false }) => {
  return (
    <Badge
      className='SubHead-sm'
      color={active ? '#059669' : 'tertiary'}
      background={active ? 'transparent' : '#F0F2F4'}
      border={`1px solid ${active ? '#059669' : '#CCD6E3'}`}
      borderRadius='14px'
      paddingY='4px'
      paddingX='8px'
    >
      {changePartToKr(part)}
    </Badge>
  );
};

PartTag.propTypes = {
  part: PropTypes.string,
  active: PropTypes.bool.isRequired,
};

export default PartTag;
