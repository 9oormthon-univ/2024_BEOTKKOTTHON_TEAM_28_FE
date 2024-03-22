import { Box, Flex } from '@chakra-ui/react';

import CalendarHeatmap from 'react-calendar-heatmap';
import { MONTHS } from '../../constants/calendarData';
import PropTypes from 'prop-types';
import clock from '../../assets/clock.png';
import { getGardenData } from '../../api/common';
import loader from '../../assets/loader.png';
import { useEffect } from 'react';
import { useState } from 'react';

const GardenPlot = ({ id }) => {
  const [data, setData] = useState([]);

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      // TODO
      const response = await getGardenData(id);
      setData(response);
    };

    fetchData();
  }, [id]);

  return (
    <Flex
      direction='column'
      gap='24px'
      border='1px solid #CCD6E3'
      borderRadius='12px'
      padding='30px'
    >
      <Flex className='Display-sm'>
        <Box color='brandBold'>{data?.userNickName ?? 'User'}</Box>님의 작업 척도
      </Flex>
      <Box>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={data?.workDateList?.map((el) => ({ date: el.date, count: el.time })) ?? []}
          monthLabels={MONTHS}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            const colorScale = Math.floor((4 * value.count) / data?.workMaxTime);
            return `color-scale-${colorScale}`;
          }}
        />
      </Box>
      <Flex gap='20px' color='tertiary'>
        <Box>
          <Flex alignItems='center' gap='7px'>
            <img src={loader} alt='프로젝트 참여일' width='16px' />
            <div className='Body-md'>프로젝트 참여일</div>
          </Flex>
          <Box className='SubHead-xl'>{data?.workDateCount ?? '00'}일</Box>
        </Box>
        <Box>
          <Flex alignItems='center' gap='7px'>
            <img src={clock} alt='프로젝트 참여일' width='16px' />
            <div className='Body-md'>총 참여 시간</div>
          </Flex>
          <Box className='SubHead-xl'>{data?.totalTime ?? '00'}시간</Box>
        </Box>
      </Flex>
    </Flex>
  );
};

GardenPlot.propTypes = { id: PropTypes.number };

export default GardenPlot;
