import { Box, Button, Flex, List } from '@chakra-ui/react';

import BannerRankItem from './BannerRankItem';

const Banner = () => {
  return (
    <Flex
      width='100vw'
      gap='40px'
      background='green.100'
      justifyContent='center'
      alignItems='center'
      padding='15px'
    >
      <Flex direction='column' gap='50px' width='300px'>
        <Flex direction='column'>
          <Box className='Display-sm'>2024.03.14</Box>
          <Box className='Display-sm'>스타트업 밸리팀의</Box>
          <Box className='Display-sm'>1등 농부는</Box>
          <Box className='Display-md'>정아현님</Box>
        </Flex>
        <Button>프로젝트 팀 변경하기</Button>
      </Flex>
      <List width='922px'>
        <Flex direction='column' gap='6px'>
          <BannerRankItem />
          <BannerRankItem />
          <BannerRankItem />
          <BannerRankItem />
        </Flex>
      </List>
    </Flex>
  );
};

export default Banner;
