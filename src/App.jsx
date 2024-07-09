import Home from "./components/home";
import Cataloge from "./components/cataloge"
import Cart from "./components/cart/cart";
import Login from "./components/LOgin/login";
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/cataloge" element={<Cataloge/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
