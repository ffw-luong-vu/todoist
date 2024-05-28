import { useState } from "react";
import Form from "./Form";

const Modal = () => {
  const [showModal, setShowModal] = useState();

  return (
    <>
      {showModal && (
        <>
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                <Form />
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
};

export default Modal;
