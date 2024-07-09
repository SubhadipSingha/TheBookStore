import { useContext, useState } from 'react'
import './card.css' 
import { CartContext } from '../features/contextprovider'
function Card (props){
  const  cartbag =useContext(CartContext)
  console.log(cartbag)
  const[ count,setCount] = useState(0)
    return(
        <div className="card">
         <p>{props.id}</p> 
       <img src={props.src} />
       <h3>{ props.name}</h3> 
        <p>{ props.text}</p>
        <p>People Rated:  {Math.floor(Math.random() * 5) + 5}⭐</p>
       <p className='price'>{props.price}₹</p>
       <p className='button' onClick={()=>setCount((count) => count + 1)}  >
        <button onClick={()=>cartbag.setCart([...cartbag.cart,{id:props.id,src:props.src, name:props.name, price:props.price},])}> Add to Cart 🧺{count}</button>
        </p>
      </div>
      
    )
}
export default Card