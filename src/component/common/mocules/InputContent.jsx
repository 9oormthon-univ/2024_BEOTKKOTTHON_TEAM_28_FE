import { Flex, Text, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputContent = ({ label, placeholder, mt, value, onChange, type }) => {
  return (
    <Flex direction='column' mt={mt}>
      <Text className='Subtitle-xl'>{label}</Text>
      <Input
        w='360px'
        mt='12px'
        p='10px'
        alignItems='center'
        alignSelf='stretch'
        borderRadius='8px'
        borderWidth='1px'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Flex>
  );
};

InputContent.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mt: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default InputContent;
