import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> FoodBira App</p>
        <div className="app-download-platforms">
            <img src={assets.app} className='android' alt="" />
            <img src={assets.ios} className='ios' alt="" />
        </div>
    </div>
  )
}
