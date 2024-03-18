import { Box, Flex, Image } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const BannerRankItem = ({ isWin }) => {
  return (
    <Flex gap='20px' alignItems='center'>
      <Flex gap='8px' alignItems='center'>
        <Flex
          borderRadius='50%'
          width='50px'
          height='48px'
          justifyContent='center'
          alignItems='center'
          background='
#FFF2CA'
        >
          1
        </Flex>
        <Flex alignItems='center' gap='8px'>
          <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
          <Box>정아현</Box>
        </Flex>
      </Flex>
      <Flex
        className='SubHead-lg'
        background={isWin ? 'brand' : 'white'}
        width='600px'
        color={isWin ? 'white' : 'successBold'}
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

BannerRankItem.propTypes = {
  isWin: Boolean,
};

export default BannerRankItem;
