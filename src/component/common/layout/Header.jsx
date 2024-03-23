import { Button, Flex, Image, Link, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MenuIcon } from '../atoms';
import ProjectListModal from './ProjectListModal';
import text_logo from '../../../assets/text_logo.png';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../stores/userStore';

const Header = () => {
  const navigate = useNavigate();
  const [onProjectListToggled, setOnProjectListToggled] = useState(false);
  // TODO
  const [onProjectListTowToggled, setOnProjectListTowToggled] = useState(false);
  const [onMenuToggled, setMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const { profile } = useUserStore();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    setOnProjectListToggled(false);
    setOnProjectListTowToggled(false);
  }, []);

  const paddingX = useBreakpointValue({ base: '10px', md: '182px' });
  const width = useBreakpointValue({ base: '200px', md: 0 });

  return (
    <>
      <header style={{ paddingBottom: '60px' }}>
        <Flex
          borderBottom='1px solid #B5C1D1'
          position='fixed'
          top='0'
          background='white'
          zIndex='999'
          width='100%'
          height='60px'
          alignItems='center'
          p={`15px ${paddingX}`}
        >
          <Link href='/' mr='9px'>
            <Flex gap='9px' alignItems='center' minWidth='200px'>
              <Image src='/favicon.ico' width='40px' height='40px' />
              <Image src={text_logo} width='131px' height='21px' alt='스타트업밸리 로고' />
            </Flex>
          </Link>
          <Spacer />
          <Flex gap='20px' align='center'>
            <div
              className='sm'
              style={{ position: 'fixed', top: '20px', right: '20px' }}
              onClick={() => {
                setMenuToggled((prev) => !prev);
              }}
            >
              <MenuIcon />
            </div>
            <Button
              onClick={() => {
                setOnProjectListToggled((prev) => !prev);
                setOnProjectListTowToggled(false);
              }}
              className='Body-xl smNone'
              background='transparent'
              color={activeLink.includes('/team-task-history') ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none', background: '#ECFDF5', color: '#047857' }}
              _focus={{ bg: 'transparent' }}
            >
              팀 작업 기록
            </Button>
            <Button
              className='Body-xl smNone'
              onClick={() => {
                navigate('/question-list');
                setActiveLink('/question-list');
              }}
              background='transparent'
              color={activeLink.includes('question-list') ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none', background: '#ECFDF5', color: '#047857' }}
              _focus={{ bg: 'transparent' }}
            >
              질문 목록
            </Button>
            <Button
              className='Body-xl smNone'
              background='transparent'
              onClick={() => {
                setOnProjectListTowToggled((prev) => !prev);
                setOnProjectListToggled(false);
              }}
              color={activeLink.includes('/task-history') ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none', background: '#ECFDF5', color: '#047857' }}
              _focus={{ bg: 'transparent' }}
            >
              작업 기록
            </Button>
            <Button
              className='Body-xl smNone'
              onClick={() => {
                navigate('/dashboard');
                setActiveLink('/dashboard');
              }}
              background='transparent'
              color={activeLink.includes('dashboard') ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none', background: '#ECFDF5', color: '#047857' }}
              _focus={{ bg: 'transparent' }}
            >
              나의 대시보드
            </Button>
            <Image borderRadius='50%' src={profile} alt='프로필' width='48px' />
            <Button background='brand' color='white' width='100px'>
              로그인
            </Button>
          </Flex>
        </Flex>
      </header>
      {width === '200px' && onMenuToggled && (
        <Flex
          className='sm'
          zIndex='1000'
          position='fixed'
          top='0px'
          right='0'
          width={width}
          bottom='0'
          alignItems='center'
          paddingY='30px'
          gap='20px'
          background='#efefef'
          direction='column'
        >
          <Button
            onClick={() => {
              setMenuToggled(false);
            }}
            className='sm'
            position='absolute'
            top='-5px'
            right='165px'
            background='transparent'
          >
            X
          </Button>
          <Flex gap='9px' alignItems='center'>
            <Image src='/favicon.ico' width='40px' height='40px' />
            <Image src={text_logo} width='131px' alt='스타트업밸리 로고' />
          </Flex>
          <Flex
            justifyContent='space-between'
            height='200px'
            alignItems='center'
            direction='column'
          >
            <Link
              className='sm'
              href='/home'
              color={activeLink === '/home' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              팀 작업 기록
            </Link>
            <Link
              className='sm'
              href='/question-list'
              color={activeLink === '/question-list' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              질문 목록
            </Link>
            <Link
              className='sm'
              href='/task-history'
              color={activeLink === '/task-history' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              작업 기록
            </Link>
            <Link
              className='sm'
              href='/dashboard'
              color={activeLink === '/dashboard' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              나의 대시보드
            </Link>
          </Flex>
        </Flex>
      )}
      {onProjectListToggled && profile && <ProjectListModal />}
      {onProjectListTowToggled && profile && <ProjectListModal isTaskHistory={true} />}
    </>
  );
};

export default Header;
