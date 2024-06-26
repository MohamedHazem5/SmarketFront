import './User.css'
import { Route, Routes } from 'react-router-dom'
import Login from "./Login/Login"
import Register from "./Register/Register"

function User() {
  return <>
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </>
}
export default User;
