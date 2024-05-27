import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { ToDoListContextProvider } from "./store/ToDoListContext";

function App() {
  return (
    <ToDoListContextProvider>
      <Header />
      <main className="max-w-md mx-auto p-6">
        <AddToDo />
        <ToDoList />
      </main>
    </ToDoListContextProvider>
  );
}

export default App;
