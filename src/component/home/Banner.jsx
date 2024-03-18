import { Box, Button, Flex, List } from '@chakra-ui/react';

import BannerRankItem from './BannerRankItem';

const Banner = () => {
  return (
    <Flex
      width='99vw'
      gap='40px'
      background='#ECFDF5'
      justifyContent='center'
      alignItems='center'
      padding='50px'
    >
      <Flex direction='column' gap='50px' width='300px'>
        <Flex direction='column'>
          <Box className='Display-sm' color='brandBold'>
            2024.03.14
          </Box>
          <Box className='Display-sm' color='primary'>
            스타트업 밸리팀의
            <br />
            1등 농부는
          </Box>
          <Box className='Display-md' color='secondary'>
            정아현님
          </Box>
        </Flex>
        <Button background='#475569' color='white'>
          프로젝트 팀 변경하기
        </Button>
      </Flex>
      <List width='922px'>
        <Flex direction='column' gap='6px'>
          <BannerRankItem isWin={true} />
          <BannerRankItem />
          <BannerRankItem />
          <BannerRankItem />
        </Flex>
      </List>
    </Flex>
  );
};

export default Banner;
