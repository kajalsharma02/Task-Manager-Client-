import { Routes, Route } from "react-router-dom";
import Register from "./components/RegisterPage";
import Login from "./components/LoginPage";
import Layout from "./components/Layout";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import TaskBoard from "./components/TaskBoard";
import { AppProvider } from "./context/AppContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppProvider>
      <Toaster />
      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Protected routes within Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="board" element={<TaskBoard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
