import { useContext } from "react";
import Form from "./Form";
import ModalContext from "../store/ModalContext";

const Modal = () => {
  const modalStore = useContext(ModalContext);

  return (
    <>
      {modalStore.isModalOpen && (
        <>
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className="relative p-4 bg-white rounded-lg shadow ">
                <Form />
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50  fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
};

export default Modal;
