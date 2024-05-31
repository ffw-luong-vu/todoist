import { createContext, useState } from "react";

const ModalContext = createContext({
  isModalOpen: false,
  isModalEdit: false,
  itemEdit: {},
  toggleModal: () => {},
});

export function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState({});

  const toggleModal = (isModalEdit = false, itemEdit = null) => {
    setIsModalEdit(isModalEdit);
    if (itemEdit) setItemEdit(itemEdit);
    setIsModalOpen((prevState) => !prevState);
  };
  const modalContext = {
    isModalOpen,
    isModalEdit,
    itemEdit,
    toggleModal,
  };
  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
