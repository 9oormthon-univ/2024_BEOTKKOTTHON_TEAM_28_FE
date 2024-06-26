import { AuthBox, InputContent } from '../component/common/mocules';
import { Button, Flex, Text } from '@chakra-ui/react';

import postCredentials from '../api/login/postCredentials';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [discordId, setDiscordId] = useState('');
  const [password, setPassword] = useState('');

  const isFormFilled = discordId.trim() !== '' && password.trim() !== '';

  const [, setCookie] = useCookies(['access_token']);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = async () => {
    try {
      const response = await postCredentials(discordId, password, setCookie);
      console.log(response);
      if (response === 'true') {
        console.log('로그인 성공');
        navigate('/');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <main>
      <Flex justify='center' align='center' h='calc(100vh - 172px)'>
        <AuthBox>
          <InputContent
            label='디스코드 아이디'
            placeholder='discord id'
            mt='36px'
            value={discordId}
            onChange={(e) => setDiscordId(e.target.value)}
          />
          <InputContent
            label='비밀번호 입력'
            placeholder='PW'
            mt='36px'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Text mt='36px' textDecoration='underline' cursor='pointer' onClick={handleSignUpClick}>
            회원가입
          </Text>
          <Button
            w='100%'
            p='11px'
            mt='12px'
            onClick={handleLoginClick}
            colorScheme={isFormFilled ? 'green' : 'gray'}
            isDisabled={!isFormFilled}
          >
            로그인
          </Button>
        </AuthBox>
      </Flex>
    </main>
  );
};

export default LoginPage;
