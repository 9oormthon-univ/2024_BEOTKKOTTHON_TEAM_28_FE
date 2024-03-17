import { Flex, Text, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputContent = ({ label, placeholder }) => {
  return (
    <Flex direction='column'>
      <Text>{label}</Text>
      <Input
        mt='12px'
        p='10px'
        alignItems='center'
        alignSelf='stretch'
        borderRadius='8px'
        borderWidth='1px'
        placeholder={placeholder}
      />
    </Flex>
  );
};

InputContent.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputContent;
