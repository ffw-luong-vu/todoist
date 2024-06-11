import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import ListContext from "../store/ListContext";
import { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ToDo = ({ todo, isToDoDetail }) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleElement = useRef();
  const descriptionElement = useRef();
  const { completeItem, editItem, removeItem, getSingleItem } =
    useContext(ListContext);
  const navigate = useNavigate();

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
    if (isToDoDetail) getSingleItem(todo.id);
  };

  return (
    <li className="w-full leading-tight overflow-hidden text-gray-900 border-b border-gray-200 list-none">
      {!isEditing && (
        <div className="flex items-center px-4 py-2 transition-all hover:bg-gray-100 hover:bg-opacity-80">
          <Link className="flex-1" to={`/detail/${todo.id}`}>
            <p
              className={`text-2xl font-medium ${
                isToDoDetail ? "" : "truncate"
              } `}
            >
              {todo.title}
            </p>
            <p className={`${isToDoDetail ? "" : "truncate"} `}>
              {todo.description}
            </p>
          </Link>
          <div className="inline-flex items-center">
            <button
              type="button"
              className=" btn-icon text-gray-900"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit />
            </button>
            {!todo.completed && (
              <button
                type="button"
                className=" btn-icon text-green-700"
                onClick={() => completeItem(todo.id)}
              >
                <FaCheck />
              </button>
            )}

            <button
              type="button"
              className=" btn-icon text-red-700"
              onClick={() => {
                removeItem(todo.id);
                if (todo.completed) {
                  navigate("/");
                }
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      {isEditing && (
        <form
          onSubmit={submitEdit}
          className="flex justify-between items-center gap-4 py-2 px-4"
        >
          <div className="gap-4 flex flex-col flex-1">
            <input
              type="text"
              id="input-title"
              placeholder="Title"
              ref={titleElement}
              required
              defaultValue={todo.title}
            />
            <input
              type="text"
              id="input-description"
              placeholder="Description"
              ref={descriptionElement}
              required
              defaultValue={todo.description}
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className=" bg-green-500   shadow-green-500/20  hover:shadow-green-500/40 "
            >
              Submit
            </button>
            <button
              type="submit"
              className=" bg-red-500  shadow-red-500/20  hover:shadow-red-500/40 "
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </li>
  );
};

export default ToDo;
