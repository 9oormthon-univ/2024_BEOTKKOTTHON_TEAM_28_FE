import { Button, Flex, Img, Text } from '@chakra-ui/react';

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

  return (
    <main>
      <Flex justify='center' align='center' h='calc(100vh - 172px)'>
        <AuthBox>
          <Text mt='36px'>가입 과정 없이 디스코드로 로그인 해보세요.</Text>
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
