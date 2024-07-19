import { Button, Flex, Img, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { discordBotUrl } from '../../constants';
import nonexistence from '../../assets/nonexistence.svg';

const NonData = ({ extraText, isConnectButton }) => {
  return (
    <Flex justify='center' align='center'>
      <Flex direction='column' mt='70px' justify='center' align='center'>
        <Img src={nonexistence} w='144.476px' />
        <Flex direction='column' justify='center' align='center'>
          <Text mt='36px' mb='12px' className='Headline-lg'>
            데이터가 존재하지 않아요.
          </Text>
          {extraText && <Text textAlign='center'>{extraText}</Text>}
          {isConnectButton && (
            <Button
              marginTop='25px'
              backgroundColor='#065F46'
              textColor='white'
              onClick={() => {
                window.open(discordBotUrl, '_blank');
              }}
            >
              봇 연결하기
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

NonData.propTypes = {
  extraText: PropTypes.string,
  isConnectButton: PropTypes.bool,
};

export default NonData;
