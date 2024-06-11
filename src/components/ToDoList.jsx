import ToDo from "./Todo";
import ListContext from "../store/ListContext";
import { useContext } from "react";

const ToDoList = () => {
  const store = useContext(ListContext);

  if (store.items.length === 0) return;

  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <ul className="flex min-w-[240px] flex-col gap-1 p-2">
        {store.items.map((todo) => {
          if (todo.completed === true) return;
          return <ToDo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
