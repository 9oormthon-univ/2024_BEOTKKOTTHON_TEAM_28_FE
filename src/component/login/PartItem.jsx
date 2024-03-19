import { Flex, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PartItem = ({ part, isSelected, onClick }) => {
  return (
    <Flex
      w='128px'
      p='24px'
      direction='column'
      gap='16px'
      align='center'
      border={isSelected ? '1.2px solid #065F46' : '1.2px solid #CCD6E3'}
      borderRadius='8px'
      cursor='pointer'
      onClick={onClick}
    >
      <Box w='80px' h='80px' borderRadius='2.667px' bg='gray' />
      <Text color={isSelected ? '#065F46' : 'black'}>{part}</Text>
    </Flex>
  );
};

PartItem.propTypes = {
  part: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PartItem;
