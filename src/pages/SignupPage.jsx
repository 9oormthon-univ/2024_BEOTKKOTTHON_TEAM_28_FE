import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthBox, InputContent } from '../component/common/mocules';
import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';
import ProfileSwiper from '../component/signup/ProfileSwiper';
import postUserData from '../api/signup/postUserData';

const SignupPage = () => {
  const [nickname, setNickname] = useState('');
  const [discordId, setDiscordId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [selectedProfile, setSelectedProfile] = useState(null);

  const navigate = useNavigate();

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSignup = async () => {
    console.log('nickname:', nickname);
    console.log('discordId:', discordId);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);

    if (!nickname || !discordId || !password || !confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const userData = {
      nickname: nickname,
      discord_id: discordId,
      password: password,
      profile_image: selectedProfile,
    };

    console.log(userData);

    try {
      const response = await postUserData(userData);
      console.log('Signup Response:', response);

      navigate('/login');
    } catch (error) {
      console.error('Signup Error:', error);
      alert('회원가입에 실패하였습니다.');
    }
  };

  return (
    <main>
      <Flex justify='center'>
        <AuthBox mt='80px' mb='191px'>
          <Text mt='36px' mb='12px' w='100%'>
            프로필 캐릭터
          </Text>
          <ProfileSwiper onSelectImage={handleSelectProfile} />
          <InputContent
            label='닉네임'
            placeholder='닉네임'
            mt='36px'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <InputContent
            label='디스코드 아이디'
            placeholder='discord id'
            mt='12px'
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
          <InputContent
            label='비밀번호 확인'
            placeholder='PW'
            mt='36px'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
          <Button w='100%' p='11px' mt='36px' onClick={handleSignup}>
            회원가입
          </Button>
        </AuthBox>
      </Flex>
    </main>
  );
};

export default SignupPage;
