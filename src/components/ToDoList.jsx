import ToDoItem from "./ToDoItem";
import ToDoListContext from "../store/ToDoListContext";
import { useContext } from "react";

const ToDoList = () => {
  const toDoListStore = useContext(ToDoListContext);

  return (
    <ul className="divide-y divide-gray-200  bg-white">
      {toDoListStore.items.map((todoItem) => {
        if (todoItem.completed === true) return;
        return <ToDoItem key={todoItem.id} todo={todoItem} />;
      })}
    </ul>
  );
};

export default ToDoList;
