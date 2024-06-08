import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.cup_icon} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et facilis doloribus recusandae reiciendis eum, laborum nam sunt accusamus repellat.</p>
                <div className="footer-social-icons">
                    <img src={assets.fb} alt="" />
                    <img src={assets.ln} alt="" />
                    <img src={assets.insta} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Felivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+261 34 63 307 67</li>
                    <li>foodbira@contact.mg</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © FoddBira.com - All Right Reserved.</p>
    </div>
  )
}
