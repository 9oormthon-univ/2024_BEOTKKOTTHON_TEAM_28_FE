import { Flex, Text, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputContent = ({ label, placeholder, mt, value, onChange, type, confirmValue }) => {
  const isPasswordMatch = value === confirmValue;

  let borderColor = '#000';
  if (value && confirmValue) {
    borderColor = isPasswordMatch ? '#2563EB' : '#e53e3e';
  }

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
        borderColor={borderColor}
        focusBorderColor='#059669'
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
  confirmValue: PropTypes.string,
};

export default InputContent;
