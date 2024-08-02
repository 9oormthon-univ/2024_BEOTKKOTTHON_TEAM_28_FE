import {
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import propTypes from 'prop-types';

const ErrorModal = ({ type, isOpen, onClose }) => {
  let title = '';
  let message = '';

  switch (type) {
    case 'cancel':
      title = '변경사항을 저장하지 않으시나요?';
      message = '현재까지의 변경사항을 저장하지 않고 <br />나의 대시보드로 돌아가시나요?';
      break;
    case 'withdrawl':
      title = '정말 서비스를 탈퇴하시나요?';
      message =
        '더 이상 팀과 나의 성장을 확인하지 못해요 😥 <br />그래도 더 사용하지 않으시겠어요?';
      break;
    case 'RnRComplete':
      title = '동료 평가를 완료해요';
      message = '수정 사항이 저장되지 않습니다. <br />그래도 돌아가시겠습니까? ';
      break;
    case 'RnRCancel':
      title = '동료 평가를 취소해요';
      message = '수정 사항이 저장되지 않습니다. <br />그래도 돌아가시겠습니까? ';
      break;
    default:
      title = '알림';
      message = '이 작업을 계속 진행하시겠습니까?';
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius='8px'
        p='32px'
        display='flex'
        flexDirection='column'
        w='532px'
        gap='36px'
        border='1px solid #059669'
      >
        <ModalCloseButton />
        <ModalBody>
          <Flex display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box className='Display-sm' color='brandBold' textAlign='center'>
              {title}
            </Box>
            <Box
              mt='12px'
              textAlign='center'
              color='tertiary'
              dangerouslySetInnerHTML={{ __html: message }}
            ></Box>
          </Flex>
          <Flex gap='12px' justifyContent='center' mt='24px'>
            <Button w='228px' h='50px' background='#8C98A9' color='white' onClick={onClose}>
              아니오
            </Button>
            <Button w='228px' h='50px' background='brand' color='white'>
              네
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ErrorModal.propTypes = {
  type: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

export default ErrorModal;
