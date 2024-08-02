import { Box, Button, Flex, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const MobileWarnModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      zIndex='9999'
      borderRadius='4px'
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        padding='24px'
        borderRadius='8px'
        width='320px'
        marginTop='250px'
        border='1px solid #059669'
      >
        <Flex direction='column' alignItems='center' gap='16px'>
          <Flex direction='column' alignItems='center' className='Headline-lg'>
            <Box>스타트업 밸리를</Box>
            <Box>PC로 사용해보세요</Box>
          </Flex>
          <Flex direction='column' alignItems='center' className='Body-lg'>
            <Box> 스타트업 밸리는 효율적인 작업을 위해</Box>
            <Box>PC에 최적화된 서비스를 제공하고 있어요</Box>
          </Flex>
          <Button onClick={onClose} width='full' height='50px' variant='greenWhite'>
            확인
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

MobileWarnModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default MobileWarnModal;
