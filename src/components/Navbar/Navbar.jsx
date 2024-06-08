import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';



export default function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.cup_icon} alt="" className='Logo'/></Link>
        <ul className='navbar-menu'>
            <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact")}  className={menu==="contact"?"active":""}>contact</a>
        </ul>
        <div className="navbar-right">
            <i className='fa fa-search'></i>
            <div className="navbar-searche-icon">
                <Link to="/cart"><i className='fa fa-shopping-cart'></i></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Login</button>
        </div>
    </div>
  )
}
