import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';

import { AuthBox } from '../../components/molecules';
import Paths from '../../constants/Paths';
import { discordAuthUrl } from '../../constants/env';
import discordIcon from '../../assets/discord.png';
import postDiscordOAuth from '../../api/auth/postDiscordOAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');

  useEffect(() => {
    const handleDiscordOAuth = async () => {
      if (code) {
        try {
          await postDiscordOAuth(code);
          navigate('/');
        } catch (error) {
          navigate(Paths.Register);
        }
      }
    };

    handleDiscordOAuth();
  }, [code, navigate]);

  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent,
    ) && window.innerWidth <= 768;

  return (
    <main style={{ background: '#F6F6F8' }}>
      <Flex justify='center' align='center' h='calc(100vh - 172px)'>
        <AuthBox>
          {isMobile ? (
            <Flex mt='36px' direction='column' alignItems='center'>
              <Box className='Body-xl'>가입 과정 없이 디스코드로 로그인 해보세요.</Box>
              <Box className='Body-xl'>모바일은 회원가입만 가능해요.</Box>
            </Flex>
          ) : (
            <Text mt='36px'>가입 과정 없이 디스코드로 로그인 해보세요.</Text>
          )}
          <a href={discordAuthUrl}>
            <Button w='358px' background='#767FF8' color='white' mt='12px'>
              <Img src={discordIcon} alt='Discord Icon' w='24px' mr='2' />
              디스코드로 로그인
            </Button>
          </a>
        </AuthBox>
      </Flex>
    </main>
  );
};

export default LoginPage;
