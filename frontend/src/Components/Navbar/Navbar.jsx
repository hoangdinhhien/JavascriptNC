import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPE</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("fruits")}}><Link style={{ textDecoration: 'none'}} to='/fruits'>Fruit</Link>{menu==="fruits"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("vegetables")}}><Link style={{ textDecoration: 'none'}} to='/vegetables'>Vegetable</Link>{menu==="vegetables"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("juices")}}><Link style={{ textDecoration: 'none'}} to='/juices'>Juice</Link>{menu==="juices"?<h/>:<></>}</li>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </ul>   
    </div>
  )
}

export default Navbar