import Header from "./components/Header"
import Signup from "./components/Signup"
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About"
import GoogleLogin from "./components/GoogleLogin"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Header/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/googlelogin" element={<GoogleLogin/>}></Route>
  </Routes>
  </BrowserRouter>
    
  )
}