import { createContext, useReducer } from "react";

const ToDoListContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function toDoListReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    updatedItems.push({ ...action.item });
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    updatedItems.splice(existingItemIndex, 1);
    return { ...state, items: updatedItems };
  }

  if (action.type === "COMPLETE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    updatedItems[existingItemIndex].completed = true;
    return { ...state, items: updatedItems };
  }

  if (action.type === "EDIT_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    updatedItems.splice(
      existingItemIndex,
      updatedItems[existingItemIndex],
      action.item
    );
    return { ...state, items: updatedItems };
  }

  return state;
}

export function ToDoListContextProvider({ children }) {
  const [toDoList, dispatchToDoListAction] = useReducer(toDoListReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchToDoListAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchToDoListAction({ type: "REMOVE_ITEM", id });
  }

  function completeItem(id) {
    dispatchToDoListAction({ type: "COMPLETE_ITEM", id });
  }

  function editItem(item) {
    dispatchToDoListAction({ type: "EDIT_ITEM", item });
  }

  const cartContext = {
    items: toDoList.items,
    addItem,
    removeItem,
    completeItem,
    editItem,
  };

  return (
    <ToDoListContext.Provider value={cartContext}>
      {children}
    </ToDoListContext.Provider>
  );
}

export default ToDoListContext;
