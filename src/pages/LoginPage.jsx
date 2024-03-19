import { InputContent, AuthBox } from '../component/common/mocules';
import { Button, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PartModal from '../component/login/PartModal';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isPartModalOpen, setIsPartModalOpen] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    setIsPartModalOpen(true);
  };

  const handleClosePartModal = () => {
    setIsPartModalOpen(false);
  };

  return (
    <main>
      <Flex>
        <AuthBox>
          <InputContent label='디스코드 아이디' placeholder='discord id' mt='36px' />
          <InputContent label='비밀번호 입력' placeholder='PW' mt='36px' />
          <Text mt='36px' textDecoration='underline' cursor='pointer' onClick={handleSignUpClick}>
            회원가입
          </Text>
          <Button w='100%' p='11px' mt='12px' onClick={handleLoginClick}>
            로그인
          </Button>
        </AuthBox>
      </Flex>
      <PartModal isOpen={isPartModalOpen} onClose={handleClosePartModal} />
    </main>
  );
};

export default LoginPage;
