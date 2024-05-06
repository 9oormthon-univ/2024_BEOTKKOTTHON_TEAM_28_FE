import { useState } from 'react';

const useOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, onOpenModal, onCloseModal };
};

export default useOpenModal;
