import { Button, Modal, ModalOverlay, ModalContent, ModalBody, Text, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PartItem from './PartItem';
import { useState } from 'react';

const PartModal = ({ isOpen, onClose }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

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
            <PartItem
              part='기획'
              isSelected={selectedItemIndex === 0}
              onClick={() => handleItemClick(0)}
            />
            <PartItem
              part='디자인'
              isSelected={selectedItemIndex === 1}
              onClick={() => handleItemClick(1)}
            />
            <PartItem
              part='프론트엔드'
              isSelected={selectedItemIndex === 2}
              onClick={() => handleItemClick(2)}
            />
            <PartItem
              part='백엔드'
              isSelected={selectedItemIndex === 3}
              onClick={() => handleItemClick(3)}
            />
            <PartItem
              part='풀스택'
              isSelected={selectedItemIndex === 4}
              onClick={() => handleItemClick(4)}
            />
          </Flex>

          <Button
            mt='24px'
            onClick={onClose}
            w='100%'
            colorScheme={selectedItemIndex !== null ? 'green' : 'gray'}
          >
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
