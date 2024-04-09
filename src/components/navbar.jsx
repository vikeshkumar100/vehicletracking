import React from 'react'
import "./comp.css"
import carlogo from "../assets/carlogo.png"
const Navbar = () => {
  return (
    <div>
        <header className="header">
            <div className="logo"><img src={carlogo} alt="carlogo" /></div>
            <div className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <button className="button"><a href="">Start Tracking</a></button>
            </div>
        </header>
    </div>
  )
}

export default Navbar