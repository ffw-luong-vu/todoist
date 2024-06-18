import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import ToDo from "../components/ToDoItem";
import ListContext from "../store/ListContext";

const DetailPage = () => {
  const { todoId } = useParams();
  const { getSingleItem, singleItem } = useContext(ListContext);

  useEffect(() => {
    getSingleItem(todoId);
  }, [todoId]);

  if (!singleItem) return <NotFound />;
  return <ToDo todo={singleItem} isToDoDetail={true} />;
};

export default DetailPage;
