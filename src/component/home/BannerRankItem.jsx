import { Box, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { returnProfileImg } from '../../lips/returnProfile';

const BannerRankItem = ({ rank, memberId, totalTime, profileImage, nickname, isWin }) => {
  // TODO
  console.log(memberId);
  return (
    <Flex gap='20px' alignItems='center'>
      <Flex gap='8px' alignItems='center'>
        <Flex
          className='Body-lg'
          borderRadius='50%'
          width='30px'
          height='30px'
          justifyContent='center'
          alignItems='center'
          color='white'
          background='
brandBold'
        >
          {rank}
        </Flex>
        <Flex alignItems='center' gap='8px'>
          <Image
            borderRadius='50%'
            src={returnProfileImg(profileImage)}
            alt='프로필'
            width='48px'
          />
          <Box width='80px'>{nickname}</Box>
        </Flex>
      </Flex>
      <Flex
        className='SubHead-lg'
        background={isWin ? 'brand' : 'white'}
        width={`${(600 / 4) * (4 - rank) + 100}px`}
        color={isWin ? 'white' : 'successBold'}
        borderRadius='12px'
        paddingY='8px'
        paddingX='12px'
        justifyContent='flex-end'
      >
        {Math.floor(totalTime / 60)}시간 {totalTime % 60}분
      </Flex>
    </Flex>
  );
};

BannerRankItem.propTypes = {
  isWin: PropTypes.bool,
  memberId: PropTypes.number,
  totalTime: PropTypes.number,
  nickname: PropTypes.string,
  profileImage: PropTypes.string,
  rank: PropTypes.number,
};

export default BannerRankItem;
