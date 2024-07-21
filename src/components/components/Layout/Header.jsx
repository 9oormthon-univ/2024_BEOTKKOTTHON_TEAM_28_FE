import { Box, Button, Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import MenuIcon from '../../atoms/MenuIcon';
import PropTypes from 'prop-types';
import TeamSelectModal from './TeamSelectModal';
import carrot from '../../../assets/carrot.png';
import { postLogout } from '../../../api/login';
import text_logo from '../../../assets/text_logo.png';
import { useNavigate } from 'react-router-dom';
import useTeamStore from '../../../stores/useTeamStore';
import useUserStore from '../../../stores/userStore';

const Header = ({ isLogin }) => {
  const navigate = useNavigate();
  // TODO
  const [onMenuToggled, setMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isGoTaskHistory, setIsGoTaskHistory] = useState(false);

  const { teamId, isOpenTeamSelectModal, openTeamSelectModal, closeTeamSelectModal } =
    useTeamStore();
  const { profile } = useUserStore();

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    closeTeamSelectModal();
  }, [closeTeamSelectModal]);

  const width = useBreakpointValue({ base: '360px', md: 0 });

  const handleClickLogout = async () => {
    try {
      const isSuccess = await postLogout();
      console.log('전달', isSuccess);
      if (isSuccess) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      {isOpenTeamSelectModal && <TeamSelectModal isGoTaskHistory={isGoTaskHistory} />}
      <header style={{ paddingBottom: '60px' }}>
        <Flex
          borderBottom='1px solid #B5C1D1'
          position='fixed'
          top='0'
          background='white'
          zIndex='999'
          width='100%'
          height='60px'
          justifyContent='space-between'
          alignItems='center'
          p={{ base: '15px 10px', md: '15px 64px', xl: '15px 182px' }}
        >
          <Link href='/' mr='9px'>
            <Flex gap='9px' alignItems='center' minWidth='200px'>
              <Image src='/favicon.ico' width='40px' height='40px' />
              <Image src={text_logo} width='131px' height='21px' alt='스타트업밸리 로고' />
            </Flex>
          </Link>
          <Box
            className='sm'
            onClick={() => {
              setMenuToggled((prev) => !prev);
            }}
          >
            <MenuIcon />
          </Box>
          <Flex className='smNone' gap='20px' align='center' minWidth='500px'>
            <Button
              onClick={() => {
                // if (!accessToken) {
                //  navigate('/login');
                // return;
                // }
                setIsGoTaskHistory(false);
                if (teamId !== 0) {
                  navigate(`/team-task-history/${teamId}`);
                  return;
                }
                navigate(`/team-task-history/no-connected`);
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
                //if (!accessToken) {
                // navigate('/login');
                // return;
                //}
                setIsGoTaskHistory(true);
                if (teamId !== 0) {
                  navigate(`/${teamId}/task-history`);
                  return;
                }
                navigate(`/team-task-history/no-connected`);
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
            {isLogin && (
              <Image
                borderRadius='50%'
                src={profile !== '' ? profile : carrot}
                alt='프로필'
                width='48px'
              />
            )}
            {isLogin && (
              <>
                <Button
                  background='brand'
                  color='white'
                  width='100px'
                  onClick={() => {
                    openTeamSelectModal();
                  }}
                >
                  팀 변경
                </Button>
                <Button onClick={handleClickLogout}>로그아웃</Button>
              </>
            )}
            {!isLogin && (
              <Button
                background='brand'
                color='white'
                width='100px'
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </Button>
            )}
          </Flex>
        </Flex>
      </header>
      {width <= '360px' && onMenuToggled && (
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
            {isLogin && <Button onClick={handleClickLogout}>로그아웃</Button>}
            {!isLogin && (
              <Button
                background='brand'
                color='white'
                width='100px'
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </Button>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool,
};
export default Header;
