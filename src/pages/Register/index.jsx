import { AuthBox, InputContent } from '../../components/molecules';
import { Button, Checkbox, Flex, Img, Text } from '@chakra-ui/react';

import ProfileSwiper from './components/ProfileSwiper';
import link from '../../assets/link.svg';
import postUserData from '../../api/signup/postUserData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignupPage = () => {
  const [nickname, setNickname] = useState('');
  const [discordId, setDiscordId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [selectedProfile, setSelectedProfile] = useState(null);

  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const navigate = useNavigate();

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSignup = async () => {
    console.log('nickname:', nickname);
    console.log('discordId:', discordId);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);

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

  const isAllValid = () => {
    return (
      nickname &&
      discordId &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      isTermsChecked &&
      isPrivacyChecked &&
      selectedProfile != null
    );
  };

  const handleTermsOfUseClick = () => {
    window.open(
      'https://transparent-louse-5ee.notion.site/Startup-Valley-0f3e2dca3cb74d4995fd5b59e610d416?pvs=4',
    );
  };

  const handlePersonalInformationClick = () => {
    window.open(
      'https://transparent-louse-5ee.notion.site/Startup-Valley-9e3e48b413a7444eb6d1c37d68543664',
    );
  };

  return (
    <main>
      <Flex justify='center'>
        <AuthBox mt='90px' mb='100px'>
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
            confirmValue={confirmPassword}
            passBorder={true}
          />
          <InputContent
            label='비밀번호 확인'
            placeholder='PW'
            mt='36px'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            confirmValue={password}
            isConfirm={true}
            passBorder={true}
          />
          <Flex direction='column' w='100%'>
            <Flex justify='space-between' mt='36px'>
              <Flex>
                <Text mr='8px'>이용약관 확인</Text>
                <Img src={link} onClick={handleTermsOfUseClick} alt='Image' cursor='pointer' />
              </Flex>
              <Checkbox
                colorScheme='green'
                isChecked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
            </Flex>
            <Flex justify='space-between' mt='12px'>
              <Flex>
                <Text mr='8px'>개인정보 처리방침 확인</Text>
                <Img
                  src={link}
                  onClick={handlePersonalInformationClick}
                  alt='Image'
                  cursor='pointer'
                />
              </Flex>
              <Checkbox
                colorScheme='green'
                isChecked={isPrivacyChecked}
                onChange={(e) => setIsPrivacyChecked(e.target.checked)}
              />
            </Flex>
          </Flex>
          <Button
            w='100%'
            p='11px'
            mt='36px'
            onClick={handleSignup}
            colorScheme={isAllValid() ? 'green' : 'gray'}
            isDisabled={!isAllValid()}
          >
            회원가입
          </Button>
        </AuthBox>
      </Flex>
    </main>
    //
  );
};

export default SignupPage;
