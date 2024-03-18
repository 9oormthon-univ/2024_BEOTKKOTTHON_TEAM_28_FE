import { InputContent, AuthBox } from '../component/common/mocules';
import { Button, Text, Flex } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <main>
      <Flex>
        <AuthBox>
          <InputContent label='디스코드 아이디' placeholder='discord id' mt='36px' />
          <InputContent label='비밀번호 입력' placeholder='PW' mt='36px' />
          <Text mt='36px' textDecoration='underline'>
            회원가입
          </Text>
          <Button w='100%' p='11px' mt='12px'>
            로그인
          </Button>
        </AuthBox>
      </Flex>
    </main>
  );
};

export default LoginPage;
