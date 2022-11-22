import React, { useState } from "react";
import drop from '../assets/drop.svg';
import dropp from '../assets/dropp.svg';

export default function Faq(props) {
    const [tog, handleTog] = useState(false);
    function handleClick() {
        handleTog(!tog);
    }
    return(
        <div>
            <div className="faq-flex" onClick={handleClick}>
                <h3>{props.question}</h3>
                <img src={tog? dropp: drop} alt="drop" />
            </div>
            <h4 className={tog? "show": "showno"}>{props.answer}</h4>
        </div>
    )
}