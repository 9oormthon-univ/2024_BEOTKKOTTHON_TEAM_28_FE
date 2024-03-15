import { Box, Flex } from '@chakra-ui/react';

import clock from '../../assets/clock.png';
import loader from '../../assets/loader.png';

const GardenPlot = () => {
  return (
    <Flex
      direction='column'
      gap='24px'
      border='1px solid #CCD6E3'
      borderRadius='12px'
      padding='30px'
    >
      <Box className='Display-sm'>정아현님의 작업 척도</Box>
      <Box height='111px' background='pink'>
        라이브러리
      </Box>
      <Flex gap='20px' color='tertiary'>
        <Box>
          <Flex alignItems='center' gap='7px'>
            <img src={loader} alt='프로젝트 참여일' width='16px' />
            <div className='Body-md'>프로젝트 참여일</div>
          </Flex>
          <Box className='SubHead-xl'>365일</Box>
        </Box>
        <Box>
          <Flex alignItems='center' gap='7px'>
            <img src={clock} alt='프로젝트 참여일' width='16px' />
            <div className='Body-md'>총 참여 시간</div>
          </Flex>
          <Box className='SubHead-xl'>1440시간</Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default GardenPlot;
