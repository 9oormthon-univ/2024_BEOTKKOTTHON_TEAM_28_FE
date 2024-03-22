import { Box, Flex } from '@chakra-ui/react';

import CalendarHeatmap from 'react-calendar-heatmap';
import { MONTHS } from '../../constants/calendarData';
import clock from '../../assets/clock.png';
import { getGardenData } from '../../api/common';
import loader from '../../assets/loader.png';
import { useEffect } from 'react';
import { useState } from 'react';

// import { heatMapData } from '../../mocks/heatMapData';

const GardenPlot = () => {
  const [data, setData] = useState([]);

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      // TODO
      const response = await getGardenData(5);
      setData(response);
    };

    fetchData();
  }, []);
  return (
    <Flex
      direction='column'
      gap='24px'
      border='1px solid #CCD6E3'
      borderRadius='12px'
      padding='30px'
    >
      <Flex className='Display-sm'>
        <Box color='brandBold'>{'User'}</Box>님의 작업 척도
      </Flex>
      <Box>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={data}
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
          <Box className='SubHead-xl'>{'00'}일</Box>
        </Box>
        <Box>
          <Flex alignItems='center' gap='7px'>
            <img src={clock} alt='프로젝트 참여일' width='16px' />
            <div className='Body-md'>총 참여 시간</div>
          </Flex>
          <Box className='SubHead-xl'>{'00'}시간</Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default GardenPlot;
