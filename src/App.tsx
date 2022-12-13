import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}></Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
