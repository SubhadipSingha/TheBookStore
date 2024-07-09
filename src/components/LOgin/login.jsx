import Emailicon from "../../assets/icons8-email-100.png"
import Usericon from "../../assets/icons8-user-32.png"
import PasswordIcon from "../../assets/icons8-passwords-100.png"
import "./Login.css"
import { useState } from "react"

function Login(){
 const [action,setAction] = useState("Login")

return(
    <div className="login">
        
        <div className="form">
        <div className="heading">
            <h2>{action}</h2>
        </div>
        {action==="Login"?<div></div>:<div className="inputfield">
            <img src={Usericon} alt="usericon"/>
            <input type="text" placeholder="Name"/>
            </div>}

            <div className="inputfield">
            <img src={Emailicon} alt="usericon"/>
            <input type="email" placeholder="Email"/>
            </div>
            <div className="inputfield">
            <img src={PasswordIcon} alt="usericon"/>
            <input type="password" placeholder="password"/>
            </div>
            {action==="Sign Up"?<div></div>:<div className="LostPassword">
                LostPassword!? <span>Click Here</span>
                </div>}

            <div className="submitoptions"> 
                <div  >
                    <button className={action==="Login"?"submit green":"submit"} onClick={()=>{setAction("Login")}}>Login</button></div>
                <div  >
                <button className={action==="Sign Up"?"submit green":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button></div>
            </div>
        </div>

    </div>
)
}
export default Login