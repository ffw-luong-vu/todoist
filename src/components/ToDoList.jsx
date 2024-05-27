import ToDoItem from "./ToDoItem";
import ToDoListContext from "../store/ToDoListContext";
import { useContext } from "react";

const todoList = [
  { id: 1, title: "Haven", description: "This is a map", date: "28/05/2024" },
  { id: 2, title: "Icebox", description: "This is a map", date: "29/05/2024" },
  { id: 3, title: "Breeze", description: "This is a map", date: "30/05/2024" },
  { id: 4, title: "Split", description: "This is a map", date: "31/05/2024" },
];

const ToDoList = () => {
  const store = useContext(ToDoListContext);
  console.log(store);
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-white">
      {store.items.map((todoItem) => (
        <ToDoItem key={todoItem.id} todo={todoItem} />
      ))}
    </ul>
  );
};

export default ToDoList;
