import { Button, Flex, Image, Link, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MenuIcon } from '../atoms';
import ProjectListModal from './ProjectListModal';
import text_logo from '../../../assets/text_logo.png';
import tomato from '../../../assets/cucumber.png';

const Header = () => {
  const [onProjectListToggled, setOnProjectListToggled] = useState(false);
  // TODO
  const [onProjectListTowToggled, setOnProjectListTowToggled] = useState(false);
  const [onMenuToggled, setMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
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
            <Flex gap='9px' alignItems='center'>
              <Image src='/favicon.ico' width='40px' height='40px' />
              <Image src={text_logo} width='131px' alt='스타트업밸리 로고' />
            </Flex>
          </Link>
          <Spacer />
          <Flex gap='20px' align='center'>
            <div
              className='sm'
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
              href='/home'
              background='transparent'
              color={activeLink === '/home' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              팀 작업 기록
            </Button>
            <Link
              className='Body-xl smNone'
              href='/question-list'
              color={activeLink === '/question-list' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              질문 목록
            </Link>
            <Button
              className='Body-xl smNone'
              background='transparent'
              onClick={() => {
                setOnProjectListTowToggled((prev) => !prev);
                setOnProjectListToggled(false);
              }}
              color={activeLink === '/task-history' ? '#047857' : 'black'}
              _hover={{ textDecoration: 'none' }}
            >
              작업 기록
            </Button>
            <Link
              className='Body-xl smNone'
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
      {onMenuToggled && (
        <Flex
          className='sm'
          zIndex='998'
          position='fixed'
          top='60px'
          right='0'
          width={width}
          bottom='0'
          alignItems='center'
          paddingY='20px'
          gap='20px'
          background='#efefef'
          direction='column'
        >
          {/*<Flex gap='9px' alignItems='center'>
            <Image src='/favicon.ico' width='40px' height='40px' />
            <Image src={text_logo} width='131px' alt='스타트업밸리 로고' />
          </Flex>*/}
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
      {onProjectListToggled && <ProjectListModal />}
      {onProjectListTowToggled && <ProjectListModal isTaskHistory={true} />}
    </>
  );
};

export default Header;
