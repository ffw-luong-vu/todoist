import { FaPlus } from "react-icons/fa";
import ModalContext from "../store/ModalContext";
import { useContext } from "react";

const AddToDo = () => {
  const store = useContext(ModalContext);
  return (
    <button
      type="button"
      className="text-red-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm  p-2.5 me-2 mb-2 flex items-center gap-2"
      onClick={() => store.toggleModal()}
    >
      <FaPlus />
      <span>Add task</span>
    </button>
  );
};

export default AddToDo;
