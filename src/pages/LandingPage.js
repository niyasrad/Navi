import React from "react";
import './pages.css';
import full from '../assets/fulllogo.svg';
import drop from '../assets/drop.svg';
export default function LandingPage(props) {
    function handleClick(){
        let a = document.getElementById("features");
        a.scrollIntoView();
    }
    return (
        <div id="landing" className="screen landing">
            <h3><span className="bold">We just</span>,<br></br>Just care <span className="bold">too much.</span></h3>
            <img className="land-logo" src={full} alt="logo" />
            <img className="land-drop" src={drop} alt="logo" onClick={handleClick} />
        </div>
    )
}