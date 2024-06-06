import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListContextProvider } from "./store/ListContext";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import CompletedPage from "./pages/CompletedPage";
import ToDoDetailPage from "./pages/ToDoDetailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ListContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="completed">
              <Route index element={<CompletedPage />} />
            </Route>
            <Route path="detail/:todoId" element={<ToDoDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </ListContextProvider>
  );
}

export default App;
