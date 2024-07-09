import { useContext, useState } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { CartContext } from '../features/contextprovider';
import "./cart.css"
import Emptycart from "../../assets/—Pngtree—hand painted trolley empty cart_3892416.png"

function Cart() {
  
  const Cart = useContext(CartContext)
  const Total = Cart.cart.reduce((a,b) => a + b.price,0)
  return (
   
    <div>
      <Navbar/>
      <h1 className='text'>Available Cart Items</h1>
      <div className='cart'>
        
           {Cart.cart.length ===0 ?(
            <div className='empty'><img src={Emptycart}></img>
            <p>Uh oh! Looks like your cart is empty</p></div>
           ) : (Cart.cart.map((cart) => 
           <div className='cartcard' key={cart.id}> 
           <img src={cart.src}></img> 
            <p>Name: {cart.name}</p> <p>Price: {cart.price}₹</p>
           </div>)
  ) }
     </div>
      <div className='payment'>
        <p>Total Bil: {Total} ₹</p>
        <button> PLACE ORDER </button>
      </div>
      <Footer/>
      </div>
    
  );
}

export default Cart;
