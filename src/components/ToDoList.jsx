import ToDoItem from "./ToDoItem";
import ToDoListContext from "../store/ToDoListContext";
import { useContext } from "react";

const ToDoList = () => {
  const store = useContext(ToDoListContext);
  console.log(store);
  console.log(store.items);
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-white">
      {store.items.map((todoItem) => {
        if (todoItem.completed === true) return;
        return <ToDoItem key={todoItem.id} todo={todoItem} />;
      })}
    </ul>
  );
};

export default ToDoList;
