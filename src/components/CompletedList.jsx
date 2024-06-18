import ToDo from "./ToDoItem";
import { useToDoListContext } from "../store/ToDoListContext";

const CompletedList = () => {
  const { toDoList } = useToDoListContext();
  const completedList = toDoList.filter((toDo) => toDo.completed === true);

  if (completedList.length === 0)
    return (
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 ">
        Nothing has been done yet
      </h1>
    );

  return (
    <div className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <ul className="flex flex-col gap-1">
        {completedList.map((todo) => {
          return <ToDo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default CompletedList;
