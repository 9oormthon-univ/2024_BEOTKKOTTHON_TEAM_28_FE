import PropTypes from 'prop-types';
import { Switch } from '@chakra-ui/react';

const Toggle = ({ isChecked, onClick }) => {
  return <Switch colorScheme='blue' isChecked={isChecked} onChange={onClick} />;
};

Toggle.propTypes = {
  isChecked: Boolean,
  onClick: PropTypes.func,
};

export default Toggle;
