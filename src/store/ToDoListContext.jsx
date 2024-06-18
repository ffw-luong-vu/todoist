import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

const ToDoListContext = createContext({
  toDoList: [],
  addToDo: () => {},
  removeToDo: () => {},
  completeToDo: () => {},
  editToDo: () => {},
  getToDo: () => {},
});

const todoListStorageKey = "toToList";

export function ToDoListContextProvider({ children }) {
  const [toDoList, setToDoList] = useState(
    localStorage.getItem(todoListStorageKey)
      ? JSON.parse(localStorage.getItem(todoListStorageKey))
      : []
  );

  useEffect(() => {
    localStorage.setItem(todoListStorageKey, JSON.stringify(toDoList));
  }, [toDoList]);

  function addToDo(item) {
    setToDoList((prev) => [...prev, item]);
  }

  function removeToDo(id) {
    setToDoList((prev) => [...prev.filter((item) => item.id !== id)]);
  }

  function completeToDo(id) {
    setToDoList((prev) => {
      const existingItemIndex = prev.findIndex((item) => item.id === id);
      const updatedItems = [...prev];
      updatedItems[existingItemIndex].completed = true;
      return updatedItems;
    });
  }

  function editToDo(item) {
    setToDoList((prev) => {
      const existingItemIndex = prev.findIndex((itm) => itm.id === item.id);
      const updatedItems = [...prev];
      updatedItems.splice(existingItemIndex, 1, item);
      return updatedItems;
    });
  }

  function getToDo(id) {
    const existingItem = toDoList.find(
      (item) => String(item.id) === String(id)
    );
    return existingItem;
  }

  const cartContext = {
    toDoList,
    addToDo,
    removeToDo,
    completeToDo,
    editToDo,
    getToDo,
  };

  return (
    <ToDoListContext.Provider value={cartContext}>
      {children}
    </ToDoListContext.Provider>
  );
}

export default ToDoListContext;

export function useToDoListContext() {
  const store = useContext(ToDoListContext);
  return store;
}
