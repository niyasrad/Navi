import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.src} alt="card" />
            <p>{props.desc}</p>
        </div>
    );
}