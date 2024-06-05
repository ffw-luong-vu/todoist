import ToDo from "./Todo";
import ListContext from "../store/ListContext";
import { useContext } from "react";

const CompletedList = () => {
  const store = useContext(ListContext);
  return (
    <ul className="divide-y divide-gray-200  bg-white">
      {store.items.map((todo) => {
        if (!todo.completed) return;
        return <ToDo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default CompletedList;
