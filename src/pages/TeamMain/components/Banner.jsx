import { Box, Button, Flex, Grid, Image, List } from '@chakra-ui/react';

import BannerRankItem from './BannerRankItem';
import arrowNext from '../../../assets/next.png';
import arrowPrev from '../../../assets/prev.png';
import { getMemberRanking } from '../../../api/teamhistory';
import guy from '../../../assets/guy.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useTeamStore from '../../../stores/useTeamStore';

const Banner = () => {
  const { id } = useParams();
  const { openTeamSelectModal } = useTeamStore();
  const [data, setDatas] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [currentIndex, setCurrentIndex] = useState({ start: 0, end: 4 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberRanking(id);

      setDatas(response?.rankList ?? []);
      setProjectName(response?.projectName ?? '');
    };

    fetchData();
  }, [id]);

  const handleIndexIncrease = () => {
    setCurrentIndex((prev) => ({ start: prev.start + 4, end: prev.end + 4 }));
  };
  const handleIndexDecrease = () => {
    setCurrentIndex((prev) => ({ start: prev.start - 4, end: prev.end - 4 }));
  };

  const today = new Date();
  return (
    <Flex
      height='300px'
      gap='40px'
      background='#ECFDF5'
      justifyContent='center'
      // alignItems='center'
      padding='50px'
      position='relative'
      overflow='hidden'
    >
      <Flex direction='column' gap='25px' width='300px'>
        <Flex direction='column'>
          <Box className='Display-sm' color='brandBold' mb='10px'>
            {today.getFullYear()}.{today.getMonth() + 1}.{today.getDate()}
          </Box>
          <Box className='Display-sm' color='primary'>
            {projectName}팀의
            <br />
            1등 농부는
          </Box>
          <Box className='Display-md' mt='20px' color='secondary'>
            {data[0]?.nickname ?? ''}님
          </Box>
        </Flex>
        <Button padding='8px' background='#475569' color='white' onClick={openTeamSelectModal}>
          프로젝트 팀 변경하기
        </Button>
      </Flex>
      <List width='922px'>
        <Grid
          templateRows='repeat(4, 1fr)'
          direction='column'
          gap='6px'
          justifyContent='flex-start'
          position='relative'
        >
          {currentIndex.end <= data?.length && (
            <img
              src={arrowNext}
              onClick={handleIndexIncrease}
              className='swiper-button-next'
              alt='Next'
              style={{
                position: 'absolute',
                top: '50%',
                right: '110px',
                width: '68px',
                height: '68px',
                cursor: 'pointer',
              }}
            />
          )}
          {data.slice(currentIndex.start, currentIndex.end).map((el, index) => (
            <BannerRankItem
              rank={currentIndex.start + index + 1}
              key={el.memberId}
              nickname={el.nickname}
              profileImage={el.profileImage}
              totalTime={el.totalTime}
              isWin={el.nickname === data[0].nickname}
            />
          ))}
          {currentIndex.start > 0 && (
            <img
              src={arrowPrev}
              onClick={handleIndexDecrease}
              className='swiper-button-next'
              alt='Next'
              style={{
                position: 'absolute',
                top: '50%',
                left: '-70px',
                width: '68px',
                height: '68px',
                cursor: 'pointer',
              }}
            />
          )}
        </Grid>
      </List>
      <Image src={guy} alt='그래픽요소' position='absolute' right='300px' top='150px' />
    </Flex>
  );
};

export default Banner;
