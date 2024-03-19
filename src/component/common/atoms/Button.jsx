import { Button as Btn } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Button = ({ size, color, text, mt }) => {
  return (
    <Btn size={size ?? 'md'} colorScheme={color ?? 'teal'} marginTop={mt}>
      {text}
    </Btn>
  );
};
Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  mt: PropTypes.string,
};
export default Button;
