import React from "react";
import Card from "../components/Card";
import nav from '../assets/nav.svg';
import emer from '../assets/emer.svg';
import recog from '../assets/recog.svg';
import wea from '../assets/wea.svg'

export default function FeaturePage(props) {
    return (
        <div id="features"  className="screen features">
            <h2>Features</h2>
            <div className="grid-wrapper">
                <Card src={wea} desc="Weather"/>
                <Card src={nav} desc="Navigation"/>
                <Card src={emer} desc="Emergency"/>
                <Card src={recog} desc="Recognition"/>
            </div>
            <p>NAVI aims to provide the ultimate visual accessibility tool.</p>
        </div>
    )
}