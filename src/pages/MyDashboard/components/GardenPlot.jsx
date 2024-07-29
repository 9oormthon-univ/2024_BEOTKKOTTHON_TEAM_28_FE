import { Box, Flex } from '@chakra-ui/react';

import CommitBox from '../../../components/molecules/CommitBox';
import Paths from '../../../constants/Paths';
import PropTypes from 'prop-types';
import clock from '../../../assets/clock.png';
import { getGardenData } from '../../../api/common';
import loader from '../../../assets/loader.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const GardenPlot = ({ name, id }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [data, setData] = useState([]);

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const response = await getGardenData(id, currentPath === Paths.MyDashboard);
      setData(response);
    };

    fetchData();
  }, [id, currentPath]);

  return (
    <Flex
      direction='column'
      gap='24px'
      border='1px solid #CCD6E3'
      borderRadius='12px'
      padding='30px'
    >
      <Flex className='Display-sm'>
        <Box color='brandBold'>{name ?? data?.userNickName}</Box>님의 작업 척도
      </Flex>
      <Box>
        <CommitBox
          values={
            data?.workDateList?.map((el) => ({ date: new Date(el.date), value: el.time })) ?? []
          }
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
          <Box className='SubHead-xl'> {Math.floor(data?.totalTime / 60) ?? '00'}시간</Box>
        </Box>
      </Flex>
    </Flex>
  );
};

GardenPlot.propTypes = { id: PropTypes.string, name: PropTypes.string };

export default GardenPlot;
