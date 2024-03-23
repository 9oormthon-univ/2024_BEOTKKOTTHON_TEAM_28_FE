import { Flex, Text, Img } from '@chakra-ui/react';
import nonexistence from '../../../assets/nonexistence.svg';

const NonData = () => {
  return (
    <Flex justify='center' align='center'>
      <Flex direction='column' mt='70px' justify='center' align='center'>
        <Img src={nonexistence} w='144.476px' />
        <Flex direction='column' justify='center' align='center'>
          <Text mt='36px' mb='12px' className='Headline-lg'>
            데이터가 존재하지 않아요.
          </Text>
          <Text textAlign='center'>
            서버에 디스코드 봇을 추가하여
            <br />
            팀원들과 소통해보세요!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NonData;
