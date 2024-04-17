import { Flex, Text, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputContent = ({
  label,
  placeholder,
  mt,
  value,
  onChange,
  type,
  confirmValue,
  isConfirm,
}) => {
  const isPasswordMatch = value === confirmValue;

  let borderColor = '#000';

  if (value) {
    if ((value || confirmValue) && isPasswordMatch) {
      borderColor = '#2563EB';
    } else {
      borderColor = '#e53e3e';
    }
  }

  const shouldShowError = value && !isPasswordMatch && isConfirm;

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
      {shouldShowError && (
        <Text
          color='#e53e3e'
          mt='2px'
          // position='fixed' top='908px'
        >
          비밀번호가 일치하지 않습니다.
        </Text>
      )}
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
  CheckPassword: PropTypes.string,
  isConfirm: PropTypes.bool,
};

export default InputContent;
