import React from 'react'
import "./comp.css"
import carlogo from "../assets/carlogo.png"
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <header className="header">
            <div className="logo"><img src={carlogo} alt="carlogo" /></div>
            <div className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/feature">Features</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div>
                <button className="button"><Link to="/track">Start Tracking</Link></button>
            </div>
        </header>
    </div>
  )
}

export default Navbar