import Cards from "./components/cards"
import Signup from "./components/Signup"
import Login from "./components/Login";
import GoogleLogin from "./components/GoogleLogin"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Cards/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/googlelogin" element={<GoogleLogin/>}></Route>
  </Routes>
  </BrowserRouter>
    
  )
}