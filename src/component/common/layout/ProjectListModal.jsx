import { Flex, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { getProjectList } from '../../../api/common';
import { useEffect } from 'react';

// import { useState } from 'react';

const ProjectListModal = ({ isOpen, onClose }) => {
  // const [projects, setProjects] = useState([]);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // const handleItemClick = (index) => {
  //   setSelectedItemIndex(index);
  // };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg='rgba(10, 10, 13, 0.7)' />
      <ModalContent m='auto'>
        <ModalBody p='48px 40px' w='100%'>
          <Flex></Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ProjectListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectListModal;
