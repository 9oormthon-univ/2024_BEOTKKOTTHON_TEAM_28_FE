import { Box, Button, Flex, Image } from '@chakra-ui/react';

import { getReceivedQuestion } from '../../api/questionlist';
import tomato from '../../assets/tomato.png';
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
      const response = await getReceivedQuestion(id);

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
        background='#F0F2F4'
        padding='12px'
        borderRadius='12px'
      >
        {data.map((el) => {
          return (
            <Flex gap='8px' key={el.title}>
              <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
              <Flex direction='column'>
                <Box className='SubHead-lg'>{el.content}</Box>
                <Box className='SubHead-md' color='brandBold'>
                  {el?.sender?.part}
                </Box>
              </Flex>
            </Flex>
          );
        })}
        <Button
          variant='greenGreen'
          width='100%'
          onClick={() => {
            navigate(`/${id}/task-history`);
          }}
        >
          더보기
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
