import { Box, Button, Flex } from '@chakra-ui/react';

import QuestionItem from './QuestionItem';
import { getWaitingQuestions } from '../../../api/teamhistory';
import { returnProfileImg } from '../../../lips/returnProfile';
import tomato from '../../../assets/tomato.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const QuestionBox = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWaitingQuestions(id);

      setData(response);
    };

    fetchData();
  }, [id]);

  return (
    <Flex direction='column' gap='16px'>
      <Box className='SubHead-xl'>답변을 기다리는 요청</Box>
      <Flex
        direction='column'
        gap='12px'
        width='276px'
        marginBottom='12px'
        //background='#F0F2F4'
        background='white'
        border='1px solid #CCD6E3'
        padding='12px'
        borderRadius='12px'
      >
        {(!data || data?.length === 0) && <QuestionItem isBlank />}
        {data?.map((el) => {
          return (
            <QuestionItem
              isBlank
              key={el.sender.id}
              id={el.sender.id}
              profileImage={returnProfileImg(el.sender.profileImage) ?? tomato}
              questionContent={
                el.sender.content.length <= 10
                  ? el.sender.content
                  : el.sender.content.substring(0, 10) + '...'
              }
              part={el.sender.part}
            />
          );
        })}
        <Button
          variant='greenGreen'
          width='100%'
          onClick={() => {
            navigate(`/question-list?teamId=${id}`);
          }}
          border='1px solid #059669'
        >
          더보기
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
