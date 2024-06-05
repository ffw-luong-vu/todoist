import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Modal from "./components/Modal";
import { ToDoListContextProvider } from "./store/ToDoListContext";
import { ModalContextProvider } from "./store/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <ToDoListContextProvider>
        <Header />
        <main className="max-w-md mx-auto p-8">
          <AddToDo />
          <ToDoList />
        </main>
        <Modal />
      </ToDoListContextProvider>
    </ModalContextProvider>
  );
}

export default App;
