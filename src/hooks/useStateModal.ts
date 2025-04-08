import { useState } from 'react';

export const useStateModal = () => {
  const [modalRef, setModalRef] = useState(false);

  const closeModal = () => setModalRef(false);

  const openModal = () => setModalRef(true);

  return { modalRef, openModal, closeModal };
};
