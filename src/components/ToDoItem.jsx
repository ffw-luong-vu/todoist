import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import ToDoListContext from "../store/ToDoListContext";
import { useContext } from "react";

const ToDoItem = ({ todo }) => {
  const store = useContext(ToDoListContext);

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {todo.title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {todo.description}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {todo.date}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button type="button" className="p-2 ">
            <FaEdit />
          </button>
          <button
            type="button"
            className="p-2 text-green-700"
            onClick={() => store.completeItem(todo.id)}
          >
            <FaCheck />
          </button>
          <button
            type="button"
            className="p-2 text-red-700"
            onClick={() => store.removeItem(todo.id)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
