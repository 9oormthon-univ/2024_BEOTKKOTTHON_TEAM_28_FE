import { Flex, Text, Img } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import nonexistence from '../../../assets/nonexistence.svg';

const NonData = ({ extraText }) => {
  return (
    <Flex justify='center' align='center'>
      <Flex direction='column' mt='70px' justify='center' align='center'>
        <Img src={nonexistence} w='144.476px' />
        <Flex direction='column' justify='center' align='center'>
          <Text mt='36px' mb='12px' className='Headline-lg'>
            데이터가 존재하지 않아요.
          </Text>
          {extraText && <Text textAlign='center'>{extraText}</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
};

NonData.propTypes = {
  extraText: PropTypes.string,
};

export default NonData;
