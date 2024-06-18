import ToDo from "./ToDoItem";
import { useToDoListContext } from "../store/ToDoListContext";

const ToDoList = () => {
  const { toDoList } = useToDoListContext();

  if (toDoList.length === 0)
    return (
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 ">
        No need to do anything
      </h1>
    );

  return (
    <div className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <ul className="flex flex-col gap-1">
        {toDoList.map((todo) => {
          if (todo.completed === true) return;
          return <ToDo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
