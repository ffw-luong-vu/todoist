import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import ToDoListContext from "../store/ToDoListContext";
import { useContext } from "react";
import ModalContext from "../store/ModalContext";

const ToDoItem = ({ todo }) => {
  const toDoListStore = useContext(ToDoListContext);
  const modalStore = useContext(ModalContext);

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {todo.title}
          </p>
          <p className="text-sm text-gray-500 truncate ">{todo.description}</p>
          <p className="text-sm text-gray-500 truncate ">{todo.date}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
          <button
            type="button"
            className="p-2 "
            onClick={() => {
              modalStore.toggleModal(true, todo);
            }}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className="p-2 text-green-700"
            onClick={() => toDoListStore.completeItem(todo.id)}
          >
            <FaCheck />
          </button>
          <button
            type="button"
            className="p-2 text-red-700"
            onClick={() => toDoListStore.removeItem(todo.id)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
