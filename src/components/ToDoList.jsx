import ToDo from "./ToDoItem";
import ListContext from "../store/ListContext";
import { useContext } from "react";

const ToDoList = () => {
  const store = useContext(ListContext);

  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <ul className="flex flex-col gap-1">
        {store.items.map((todo) => {
          if (todo.completed === true) return;
          return <ToDo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
