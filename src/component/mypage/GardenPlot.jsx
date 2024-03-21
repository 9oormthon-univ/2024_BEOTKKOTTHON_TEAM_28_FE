import { Box, Flex } from '@chakra-ui/react';

import CalendarHeatmap from 'react-calendar-heatmap';
import { MONTHS } from '../../constants/calendarData';
import clock from '../../assets/clock.png';
import { heatMapData } from '../../mocks/heatMapData';
import loader from '../../assets/loader.png';

const GardenPlot = () => {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();

  return (
    <Flex
      direction='column'
      gap='24px'
      border='1px solid #CCD6E3'
      borderRadius='12px'
      padding='30px'
    >
      <Flex className='Display-sm'>
        <Box color='brandBold'>정아현</Box>님의 작업 척도
      </Flex>
      <Box>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={heatMapData}
          monthLabels={MONTHS}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${Math.floor(value.count / 2)}`;
          }}
        />
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
