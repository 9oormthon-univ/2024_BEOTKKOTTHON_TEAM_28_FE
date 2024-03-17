import { useState, useEffect } from 'react';
import { Flex, Link, Spacer } from '@chakra-ui/react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <header>
      <Flex alignItems='center' p='15px 182px'>
        <Link href='/' mr='9px'>
          로고
        </Link>
        <Link href='/'>스타트업 밸리</Link>
        <Spacer />
        <Flex gap='20px'>
          <Link
            href='/home'
            color={activeLink === '/home' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            팀 작업 기록
          </Link>
          <Link
            href='/question-list'
            color={activeLink === '/question-list' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            질문 목록
          </Link>
          <Link
            href='/task-history'
            color={activeLink === '/task-history' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            작업 기록
          </Link>
          <Link
            href='/dashboard'
            color={activeLink === '/dashboard' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            나의 대시보드
          </Link>
          <Link
            href='/mypage'
            color={activeLink === '/mypage' ? '#047857' : 'black'}
            _hover={{ textDecoration: 'none' }}
          >
            마이페이지
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
