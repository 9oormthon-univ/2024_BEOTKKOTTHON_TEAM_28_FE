import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TimeButton = ({ onClick, text }) => {
  return (
    <Button
      padding='20px 12px'
      onClick={onClick}
      backgroundColor='#ffffff'
      border='1px solid #CCD6E3'
      _hover={{ color: '#991B1B', backgroundColor: '#FEF2F2', border: '1px solid #991B1B' }}
    >
      <span className='Display-sm'>{text}</span>
    </Button>
  );
};

TimeButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default TimeButton;
