import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

export default function Login({setShowLogin}) {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login'>
        <form action="" className='login-container'>
            <div className="login-title">
                <h2>{currState}</h2>
                <i onClick={()=>setShowLogin(false)} className='fa fa-remove'></i>
            </div>
            <div className="login-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                {currState==="Login"?<></>:<input type="password" placeholder='Your confirm Password' required />}
                
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your Password' required />
                
            </div>
            <button> {currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy police</p>
            </div>
            {currState==="Login"?<p>Create a news accounts? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
            
            
        </form>
    </div>
  )
}
