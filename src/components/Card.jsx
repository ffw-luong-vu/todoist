import { useContext } from "react";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ListContext from "../store/ListContext";

const Card = ({ todo, isToDoDetail, setEditing }) => {
  const navigate = useNavigate();
  const { completeItem, removeItem } = useContext(ListContext);

  return (
    <div
      className={`flex items-center px-4 py-2 transition-all ${
        !isToDoDetail && "hover:bg-gray-100 hover:bg-opacity-80"
      }`}
    >
      {isToDoDetail ? (
        <div className="flex-1">
          <p className="text-2xl font-medium">{todo.title}</p>
          <p>{todo.description}</p>
        </div>
      ) : (
        <Link className="flex-1" to={`/detail/${todo.id}`}>
          <p className="text-2xl font-medium truncate">{todo.title}</p>
          <p className="truncate">{todo.description}</p>
        </Link>
      )}
      <div className="inline-flex items-center">
        <button
          type="button"
          className=" btn-icon text-gray-900"
          onClick={() => setEditing(true)}
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
  );
};

export default Card;
