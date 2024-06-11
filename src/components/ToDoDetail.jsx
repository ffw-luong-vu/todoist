import { useParams } from "react-router-dom";
import ListContext from "../store/ListContext";
import { useContext, useEffect } from "react";
import ToDo from "./ToDoItem";

const SingleToDo = () => {
  const { todoId } = useParams();
  const { getSingleItem, singleItem } = useContext(ListContext);

  useEffect(() => {
    getSingleItem(todoId);
  }, [todoId]);

  if (!singleItem) return <h1>Loading</h1>;
  return <ToDo todo={singleItem} isToDoDetail={true} />;
};

export default SingleToDo;
