import { AuthBox, InputContent } from '../component/common/mocules';
import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';

import ProfileSwiper from '../component/signup/ProfileSwiper';

const SignupPage = () => {
  return (
    <main>
      <AuthBox mt='80px' mb='191px'>
        <Text mt='36px' mb='12px' w='100%'>
          프로필 캐릭터
        </Text>
        <ProfileSwiper />
        <InputContent label='닉네임' placeholder='닉네임' mt='36px' />
        <InputContent label='디스코드 아이디' placeholder='discord id' mt='12px' />
        <InputContent label='비밀번호 입력' placeholder='PW' mt='36px' />
        <InputContent label='비밀번호 확인' placeholder='PW' mt='36px' />
        <Flex direction='column' w='100%'>
          <Flex justify='space-between' mt='36px'>
            <Text>이용약관 확인</Text>
            <Checkbox />
          </Flex>
          <Flex justify='space-between' mt='12px'>
            <Text>개인정보 처리방침 확인</Text>
            <Checkbox />
          </Flex>
        </Flex>
        <Button w='100%' p='11px' mt='36px'>
          회원가입
        </Button>
      </AuthBox>
    </main>
  );
};

export default SignupPage;
