import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { AuthProvider } from "./context/AuthContext";
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/Tasks/TaskForm";
import Home from "./components/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import Navbar from "./components/navbar/Navbar";
import { Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/tasks/id:" element={<TaskForm />} />
              </Route>
            </Routes>
            <Footer/>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
