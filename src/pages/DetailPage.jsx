import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import ToDo from "../components/ToDoItem";
import { useToDoListContext } from "../store/ToDoListContext";

const DetailPage = () => {
  const { todoId } = useParams();
  const { getToDo } = useToDoListContext();
  const singleItem = getToDo(todoId);

  if (!singleItem) return <NotFound />;
  return <ToDo todo={singleItem} isToDoDetail={true} />;
};

export default DetailPage;
