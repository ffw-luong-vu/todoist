import { useParams } from "react-router-dom";
import ListContext from "../store/ListContext";
import { useContext, useEffect } from "react";

const SingleTodo = () => {
  const { todoId } = useParams();
  console.log(todoId);
  const { getSingleItem, singleItem } = useContext(ListContext);
  useEffect(() => {
    getSingleItem(todoId);
  }, [todoId]);
  if (!singleItem) return <h1>Loading</h1>;
  return (
    <div>
      <p className="text-2xl font-medium text-gray-900 truncate ">
        {singleItem.title}
      </p>
      <p className="text-base text-gray-500 truncate">
        {singleItem.description}
      </p>
    </div>
  );
};

export default SingleTodo;
