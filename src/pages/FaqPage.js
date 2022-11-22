import React from "react";
import Faq from "../components/Faq";

export default function FaqPage(props) {
    return(
        <div id="faq"  className="screen faq">
            <h2>FAQ</h2>
            <div className="faqs">
                <Faq question="What’s NAVI? Who can use it?" answer="NAVI is the pinnacle product, which aims to serve it's users with a top priority of (visually impaired) users. Foucussed on navigation and emergency services." />
                <Faq question="How does NAVI Profit?" answer="It is very fortunate for us, that we're going open-source and with the help of experts we might start our own Non-Profit organization with this initiative. *VSYNC is working on making this come true." />
                <Faq question="How is navigation different?" answer="We aim to build MicroMaps, which, different from any other map service you've seen, takes a lot of effort and converts your surroundings into styled maps with automated access." />
                <Faq question="The “Recognition” system" answer="The recognition system is a part of converting the navigation elements to an actual map service." />
            </div>
            <p>If you have any questions or queries, you can join the community discord!</p>
        </div>
    )
}