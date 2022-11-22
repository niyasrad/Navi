import React from "react";
import full from '../assets/fulllogo.svg';
import dropp from '../assets/dropp.svg';

export default function CommunityPage(props) {
    function handleClick(){
        let a = document.getElementById("landing");
        a.scrollIntoView();
    }
    return(
        <div id="community" className="screen community">
            <h3>Community</h3>
            <button>Join Discord</button>
            <img className="land-logo" src={full} alt="logo" />
            <img className="land-drop" src={dropp} alt="logo" onClick={handleClick} />
            <p>Designed by Niyas Hameed. </p>
        </div>
    )
}