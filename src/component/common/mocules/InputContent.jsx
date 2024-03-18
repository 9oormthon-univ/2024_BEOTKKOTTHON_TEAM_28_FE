import { Flex, Text, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputContent = ({ label, placeholder, mt }) => {
  return (
    <Flex direction='column' mt={mt}>
      <Text>{label}</Text>
      <Input
        w='360px'
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
  mt: PropTypes.string,
};

export default InputContent;
