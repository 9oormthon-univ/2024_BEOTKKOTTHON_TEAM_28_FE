import { Flex, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PartItem = ({ part }) => {
  return (
    <Flex
      w='128px'
      p='24px'
      direction='column'
      gap='16px'
      align='center'
      border='1px solid #CCD6E3'
      borderRadius='8px'
    >
      <Box w='80px' h='80px' borderRadius='2.667px' bg='gray' />
      <Text>{part}</Text>
    </Flex>
  );
};

PartItem.propTypes = {
  part: PropTypes.string.isRequired,
};

export default PartItem;
