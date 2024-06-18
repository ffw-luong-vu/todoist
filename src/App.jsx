import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import CompletedPage from "./pages/CompletedPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { ListContextProvider } from "./store/ListContext";

function App() {
  return (
    <ListContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="completed" element={<CompletedPage />} />
            <Route path="detail/:todoId" element={<DetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </ListContextProvider>
  );
}

export default App;
