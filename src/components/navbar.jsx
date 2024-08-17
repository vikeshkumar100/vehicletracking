import React from 'react'
import "./comp.css"
import carlogo from "../assets/carlogo.png"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <header className="header">
            <div className="logo"><NavLink to="/"><img src={carlogo} alt="carlogo" /></NavLink></div>
            <div className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/feature">Features</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/alerts">Alerts</NavLink></li>
                </ul>
            </div>
            <div className="start-track">
            <NavLink to="/track"><button className="button">Start Tracking</button></NavLink>
            </div>
        </header>
    </div>
  )
}

export default Navbar