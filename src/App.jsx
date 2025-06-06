import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Main from "./pages/main/Main"
import { Login } from "./pages/auth/Login"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import AndminDashboardLayout from "./layout/AndminDashboardLayout"
import { Register } from "./pages/auth/Register"
import { ToastContainer } from "react-toastify"
import Users from "./pages/admin/Users"

function App() {

  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<AndminDashboardLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path="/admin/users" element={<Users/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
