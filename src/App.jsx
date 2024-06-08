import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Cart from './page/Cart/Cart'
import PlaceOrder from './page/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin} />: <></> }
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/placeOrder' element={ <PlaceOrder/> } />
      </Routes>
      <Footer/>
    </div>
    </>
    
  )
}
