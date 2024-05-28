import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";

const AddToDo = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-red-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 pl-0 pr-2.5 me-2 mb-2 flex items-center gap-2"
        onClick={() => setShowForm(true)}
      >
        <FaPlus />
        <span>Add task</span>
      </button>
      {showForm && <Modal />}
    </>
  );
};

export default AddToDo;
