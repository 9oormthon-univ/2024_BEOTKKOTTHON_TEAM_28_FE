import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import text_logo from '../../../assets/text_logo.png';
import tomato from '../../../assets/cucumber.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <header>
      <Flex
        borderBottom='1px solid #B5C1D1'
        position='fixed'
        background='white'
        zIndex='999'
        width='100%'
        height='70px'
        alignItems='center'
        p='15px 182px'
      >
        <Link href='/' mr='9px'>
          <Flex gap='9px' alignItems='center'>
            <Box>로고</Box>
            <Image src={text_logo} width='131px' alt='스타트업밸리 로고' />
          </Flex>
        </Link>

        <Spacer />
        <Flex gap='20px' alignItems='center'>
          <Link
            className='Body-xl'
            href='/home'
            color={activeLink === '/home' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            팀 작업 기록
          </Link>
          <Link
            className='Body-xl'
            href='/question-list'
            color={activeLink === '/question-list' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            질문 목록
          </Link>
          <Link
            className='Body-xl'
            href='/task-history'
            color={activeLink === '/task-history' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            작업 기록
          </Link>
          <Link
            className='Body-xl'
            href='/dashboard'
            color={activeLink === '/dashboard' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            나의 대시보드
          </Link>
          <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
