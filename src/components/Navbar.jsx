import { Link } from "react-router-dom"
import BookIcon from "../assets/bookicon.png"
import FindIcon from "../assets/scearchicon.png"
import UserIcon from "../assets/icons8-user-32.png"
import './navbar.css'
import { CartContext } from "./features/contextprovider"
import { useContext } from "react"


// {size}

const Navbar =()=>{
 const {cart} = useContext(CartContext);
return (
    <div className="navbar">
  <img src={BookIcon} alt="pictures of books" className="logo"></img> 
    <h1 className="logo-name">BookStore</h1>   
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cataloge">cataloge</Link></li>
            <li>
              <Link to="/cart">Cart 🧺<span>{cart ? cart.length:0}</span></Link>

            </li>
         </ul>
         <div className="search-space">  <input type="text" placeholder="search"/>
         <img src={FindIcon} alt="pictures of magnifyingglass" /></div>
         <Link to="/login" className="Dropdown"><img src={UserIcon}/></Link>
    </div>
)

}
export default Navbar