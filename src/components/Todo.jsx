import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import ListContext from "../store/ListContext";
import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ToDo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleElement = useRef();
  const descriptionElement = useRef();
  const { completeItem, editItem, removeItem } = useContext(ListContext);

  const submitEdit = () => {
    const enteredTitle = titleElement.current.value;
    const enteredDescription = descriptionElement.current.value;
    const newItem = {
      ...todo,
      title: enteredTitle,
      description: enteredDescription,
    };
    editItem(newItem);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={submitEdit}>
        <div className="gap-4 flex flex-col flex-1 min-w-0">
          <input
            type="text"
            id="input-title"
            placeholder="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ref={titleElement}
            required
            defaultValue={todo.title}
          />
          <input
            type="text"
            id="input-description"
            placeholder="Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ref={descriptionElement}
            required
            defaultValue={todo.description}
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1.5 text-center "
          >
            Submit
          </button>
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1.5 text-center "
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <li className="w-full rounded-lg p-3 py-1 pl-4 pr-1 leading-tight outline-none transition-all hover:bg-gray-100 hover:bg-opacity-80   text-gray-900">
        <div className="flex items-center">
          <Link className="flex-1" to={`/detail/${todo.id}`}>
            <p className="text-2xl font-medium  truncate ">{todo.title}</p>
            <p className="truncate">{todo.description}</p>
          </Link>
          <div className="inline-flex items-center">
            <button
              type="button"
              className="p-3 hover:bg-gray-200 rounded-lg text-gray-900"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="p-3 hover:bg-gray-200 rounded-lg text-green-700"
              onClick={() => completeItem(todo.id)}
            >
              <FaCheck />
            </button>
            <button
              type="button"
              className="p-3 hover:bg-gray-200 rounded-lg text-red-700"
              onClick={() => removeItem(todo.id)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </li>
    );
  }
};

export default ToDo;
