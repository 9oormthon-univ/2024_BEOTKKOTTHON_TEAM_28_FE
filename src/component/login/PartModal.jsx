import { Button, Modal, ModalOverlay, ModalContent, ModalBody, Text, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PartItem from './PartItem';

const PartModal = ({ isOpen, onClose }) => {
  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg='rgba(10, 10, 13, 0.7)' />
      <ModalContent m='auto'>
        <ModalBody p='48px 40px' w='100%'>
          <Text>
            username 님은 <br />
            이번 프로젝트에서 어떤 역할이세요?
          </Text>
          <Text>*필수항목입니다.</Text>

          <Flex direction='row' gap='15px' justify='center' mt='24px'>
            <PartItem part='기획' />
            <PartItem part='디자인' />
            <PartItem part='프론트엔드' />
            <PartItem part='백엔드' />
            <PartItem part='풀스택' />
          </Flex>

          <Button mt='24px' onClick={onClose} w='100%'>
            선택완료
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

PartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PartModal;
