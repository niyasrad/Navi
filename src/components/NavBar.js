import React, { useState } from "react";
import logo from '../assets/logo.svg';
import drop from '../assets/drop.svg';

import './components.css'

export default function NavBar(props) {
    const [tog, setTog] = useState(false)

    function handleClick() {
        setTog(!tog);
    }
    return (
        <div>
            <div className="navbar">
                <img src={logo} className="llogo" alt="logo"/>
                <div className="nav">
                    <a href="#features">Features</a>
                    <a href="#faq">FAQ</a>
                    <a href="#community">Community</a>
                </div>
                <a href="https://discord.gg/vWwTWESq" target="_blank" rel="noopener noreferrer"><button>Contact Us</button></a>
                <img src={drop} alt="menu" className="toggle" onClick={handleClick}></img>
            </div>
            <div className={tog?"dropdown true":"dropdown"}>
                <a href="#features">Features</a>
                <a href="#faq">FAQ</a>
                <a href="#community">Community</a>
            </div>
            
        </div>
        
    )
}