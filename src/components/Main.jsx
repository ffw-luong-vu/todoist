import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList([...list, item]);
  };

  const removeItem = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const newList = list.splice(index, 1);
    setList(newList);
  };

  const editItem = (item) => {
    const index = list.findIndex((item) => item.id === item.id);
    const newList = list.splice(index, 1, item);
    setList(newList);
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <AddToDo addItem={addItem} />
      <ToDoList list={list} removeItem={removeItem} editItem={editItem} />
    </main>
  );
};

export default Main;
