import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export default function ExploreMenu({category, setCategory}) {
  return (
    <div className='container explore-menu' id='explore-menu'>
        <h1 className='mt-5'>Explore our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum quia facere soluta iure ex minus at doloribus consectetur repellat?</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="kaly" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}
