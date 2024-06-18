import { createContext, useReducer } from "react";

const ListContext = createContext({
  items: [],
  singleItem: {},
  addItem: () => {},
  removeItem: () => {},
  completeItem: () => {},
  editItem: () => {},
  getSingleItem: () => {},
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
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    updatedItems.splice(existingItemIndex, 1, action.item);
    return { ...state, items: updatedItems };
  }

  if (action.type === "GET_ITEM") {
    const existingItem = state.items.find(
      (item) => String(item.id) === String(action.id)
    );
    return { ...state, singleItem: existingItem };
  }
  return state;
}

export function ListContextProvider({ children }) {
  const [toDoList, dispatchToDoListAction] = useReducer(toDoListReducer, {
    items: [],
    singleItem: null,
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

  function getSingleItem(id) {
    dispatchToDoListAction({ type: "GET_ITEM", id });
  }

  const cartContext = {
    items: toDoList.items,
    singleItem: toDoList.singleItem,
    addItem,
    removeItem,
    completeItem,
    editItem,
    getSingleItem,
  };

  return (
    <ListContext.Provider value={cartContext}>{children}</ListContext.Provider>
  );
}

export default ListContext;
