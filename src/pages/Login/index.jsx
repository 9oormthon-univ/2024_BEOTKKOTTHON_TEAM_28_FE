import { AuthBox } from '../../components/molecules';
import { Button, Flex, Text, Img } from '@chakra-ui/react';

import Paths from '../../constants/Paths';
import { useNavigate } from 'react-router-dom';

import discordIcon from '../../assets/discord.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate(Paths.Register);
  };

  return (
    <main>
      <Flex justify='center' align='center' h='calc(100vh - 172px)'>
        <AuthBox>
          <Text mt='36px'>가입 과정 없이 디스코드로 로그인 해보세요.</Text>
          <Button
            w='358px'
            background='#767FF8'
            color='white'
            mt='12px'
            onClick={handleSignUpClick}
          >
            <Img src={discordIcon} alt='Discord Icon' w='24px' mr='2' />
            디스코드로 로그인
          </Button>
        </AuthBox>
      </Flex>
    </main>
  );
};

export default LoginPage;
