import { Box, Flex } from '@chakra-ui/react';

import ContentMembers from './ContentMembers';
import { useParams } from 'react-router-dom';

const ContentCard = () => {
  const { id } = useParams();
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  if (!id) {
    return (
      <Flex
        padding='24px 57px 74px 24px'
        borderRadius='8.899px'
        gap='20px'
        direction='column'
        backgroundColor='#F0F2F4'
        width='292px'
        height='260px'
      >
        <Box className='Display-sm' textColor='#065F46'>
          {`${year}.${month}.${date}`}
        </Box>
        <Box className='Display-sm'>스타트업밸리로 다른 사람들과 함께 업무를 진행해봐요!</Box>
      </Flex>
    );
  }

  return (
    <Flex
      padding='24px 57px 74px 24px'
      borderRadius='8.899px'
      gap='20px'
      direction='column'
      width='292px'
      height='260px'
    >
      <Box className='Head-lg' textColor='#065F46'>
        {`${year}.${month}.${date}`}
      </Box>
      <Box className='Display-sm'>
        스타트업 밸리팀의
        <br />
        업무 상태에요.
      </Box>
      <ContentMembers />
    </Flex>
  );
};

export default ContentCard;
