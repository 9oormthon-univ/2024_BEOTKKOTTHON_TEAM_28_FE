import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import HeaderMenuItem from './HeaderMenuItem';
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
  const currentPath = window.location.pathname;
  // TODO
  const [onMenuToggled, setMenuToggled] = useState(false);
  const [isGoTaskHistory, setIsGoTaskHistory] = useState(false);

  const { teamId, isOpenTeamSelectModal, openTeamSelectModal, closeTeamSelectModal } =
    useTeamStore();
  const { profile } = useUserStore();

  useEffect(() => {
    closeTeamSelectModal();
  }, [closeTeamSelectModal]);

  const width = useBreakpointValue({ base: '360px', md: 0 });

  const handleClickLogout = async () => {
    try {
      const isSuccess = await postLogout();
      if (isSuccess) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent,
    ) && window.innerWidth <= 768;

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
          <Flex
            gap='9px'
            alignItems='center'
            minWidth='200px'
            onClick={() => {
              navigate(`/`);
            }}
          >
            <Image src='/favicon.ico' width='40px' height='40px' />
            <Image src={text_logo} width='131px' height='21px' alt='스타트업밸리 로고' />
          </Flex>
          {!isLogin && isMobile && (
            <Button
              background='brand'
              color='white'
              position='fixed'
              right='20px'
              width='100px'
              sx={{
                fontFamily: 'Pretendard',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '28px',
                letterSpacing: '0.2px',
              }}
              _hover={{
                background: 'brand',
                color: 'white',
              }}
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </Button>
          )}
          {!isMobile && (
            <Box
              className='sm'
              position='fixed'
              right='20px'
              onClick={() => {
                setMenuToggled((prev) => !prev);
              }}
            >
              <MenuIcon />
            </Box>
          )}
          <Flex className='smNone' gap='20px' align='center' minWidth='500px'>
            <HeaderMenuItem
              onClick={() => {
                setIsGoTaskHistory(false);
                if (teamId !== 0) {
                  navigate(`/team-task-history/${teamId}`);
                  return;
                }
                navigate(`/team-task-history`);
              }}
              color={currentPath.includes('/team-task-history') ? '#047857' : 'black'}
            >
              팀 작업 기록
            </HeaderMenuItem>
            <HeaderMenuItem
              onClick={() => {
                navigate('/question-list');
              }}
              color={currentPath.includes('question-list') ? '#047857' : 'black'}
            >
              질문 목록
            </HeaderMenuItem>
            <HeaderMenuItem
              onClick={() => {
                setIsGoTaskHistory(true);
                if (teamId !== 0) {
                  navigate(`/${teamId}/task-history`);
                  return;
                }
                navigate(`/task-history`);
              }}
              color={currentPath.includes('/task-history') ? '#047857' : 'black'}
            >
              작업 기록
            </HeaderMenuItem>
            <HeaderMenuItem
              onClick={() => {
                navigate('/dashboard');
              }}
              color={currentPath.includes('dashboard') ? '#047857' : 'black'}
            >
              나의 대시보드
            </HeaderMenuItem>

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
                  sx={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '28px',
                    letterSpacing: '0.2px',
                  }}
                  _hover={{
                    background: 'brand',
                    color: 'white',
                  }}
                  onClick={() => {
                    openTeamSelectModal();
                  }}
                >
                  팀 변경
                </Button>
                <Button
                  background='#E0E7EE'
                  color='#334155'
                  sx={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '28px',
                    letterSpacing: '0.2px',
                  }}
                  _hover={{
                    background: '#E0E7EE',
                    color: '#334155',
                  }}
                  onClick={handleClickLogout}
                >
                  로그아웃
                </Button>
              </>
            )}
            {!isLogin && (
              <Button
                background='brand'
                color='white'
                width='100px'
                sx={{
                  fontFamily: 'Pretendard',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '28px',
                  letterSpacing: '0.2px',
                }}
                _hover={{
                  background: 'brand',
                  color: 'white',
                }}
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
        <Modal
          zIndex='997'
          borderRadius='4px'
          blockScrollOnMount={false}
          isOpen={onMenuToggled}
          onClose={() => {
            setMenuToggled(false);
          }}
        >
          <ModalOverlay />
          <ModalContent>
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
              background='#ffffff'
              direction='column'
            >
              <Flex justifyContent='space-between' width='100%' paddingX='30px'>
                <Flex gap='9px' alignItems='center'>
                  <Image src='/favicon.ico' width='40px' height='40px' />
                  <Image src={text_logo} width='131px' alt='스타트업밸리 로고' />
                </Flex>
                <Button
                  onClick={() => {
                    setMenuToggled(false);
                  }}
                  className='sm'
                  background='transparent'
                >
                  X
                </Button>
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
                  color={currentPath === '/home' ? '#047857' : 'black'}
                  _hover={{ textDecoration: 'none' }}
                >
                  팀 작업 기록
                </Link>
                <Link
                  className='sm'
                  href='/question-list'
                  color={currentPath === '/question-list' ? '#047857' : 'black'}
                  _hover={{ textDecoration: 'none' }}
                >
                  질문 목록
                </Link>
                <Link
                  className='sm'
                  href='/task-history'
                  color={currentPath === '/task-history' ? '#047857' : 'black'}
                  _hover={{ textDecoration: 'none' }}
                >
                  작업 기록
                </Link>
                <Link
                  className='sm'
                  href='/dashboard'
                  color={currentPath === '/dashboard' ? '#047857' : 'black'}
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
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool,
};
export default Header;
