import { Box, Flex } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const BannerRankItem = () => {
  return (
    <Flex gap='20px' alignItems='center'>
      <Flex gap='8px' alignItems='center'>
        <Flex
          borderRadius='50%'
          width='48px'
          height='48px'
          justifyContent='center'
          alignItems='center'
          background='
#FFF2CA'
        >
          1
        </Flex>
        <Flex alignItems='center' gap='8px'>
          <img src={tomato} alt='프로필' width='48px' />
          <Box>정아현</Box>
        </Flex>
      </Flex>
      <Flex
        background='green.500'
        width='600px'
        color='white'
        borderRadius='12px'
        paddingY='8px'
        paddingX='12px'
        justifyContent='flex-end'
      >
        100시간 23분
      </Flex>
    </Flex>
  );
};

export default BannerRankItem;
