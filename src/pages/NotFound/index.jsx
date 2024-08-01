import { Button, Flex } from '@chakra-ui/react';

import not_found from '../../assets/images/not_found.png';

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex
      marginTop='207px'
      direction='column'
      justifyContent='center'
      alignItems='center'
      gap='36px'
    >
      <img src={not_found} alt='잘못된 경로 페이지' />
      <Flex direction='column' justifyContent='center' alignItems='center' gap='32px'>
        <div className='Display-lg'>원하시는 페이지를 찾을 수 없어요</div>
        <Flex direction='column' justifyContent='center' alignItems='center' gap='10px'>
          <div>찾으시려는 주소가 삭제, 변경되어 주소를 찾을 수 없어요.</div>
          <div>주소가 맞는지 한 번 더 확인해주세요</div>
        </Flex>
        <Button
          sx={{
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '0.2px',
          }}
          padding='8px 16px'
          backgroundColor='#065F46'
          _hover={{ backgroundColor: '#065F46', color: 'white' }}
          color='white'
          onClick={() => {
            navigate('/');
          }}
        >
          스타트업밸리 메인 페이지로
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFound;
