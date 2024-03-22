import { Box, Flex, Image, List } from '@chakra-ui/react';

import BannerRankItem from './BannerRankItem';
import { getMemberRanking } from '../../api/teamhistory';
import guy from '../../assets/guy.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Banner = () => {
  const { id } = useParams();
  const [data, setDatas] = useState([]);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberRanking(id);

      setDatas(response?.rankList ?? []);
      setProjectName(response?.projectName ?? '');
    };

    fetchData();
  }, [id]);
  return (
    <Flex
      width='99vw'
      gap='40px'
      background='#ECFDF5'
      justifyContent='center'
      alignItems='center'
      padding='50px'
      position='relative'
      overflow='hidden'
    >
      <Flex direction='column' gap='50px' width='300px'>
        <Flex direction='column'>
          <Box className='Display-sm' color='brandBold'>
            2024.03.14
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
        {/* <Button background='#475569' color='white'>
          프로젝트 팀 변경하기
        </Button> */}
      </Flex>
      <List width='922px'>
        <Flex direction='column' gap='6px'>
          {data.slice(0, 4).map((el, index) => (
            <BannerRankItem
              rank={index + 1}
              key={el.memberId}
              nickname={el.nickname}
              profileImage={el.profileImage}
              totalTime={el.totalTime}
              isWin={el.nickname === data[0].nickname}
            />
          ))}
        </Flex>
      </List>
      <Image src={guy} alt='그래픽요소' position='absolute' right='300px' top='150px' />
    </Flex>
  );
};

export default Banner;
