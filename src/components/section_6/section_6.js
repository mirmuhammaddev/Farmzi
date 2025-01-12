import React from 'react';
import "./section_6.style.css"
import {assets} from "../../assets/assets";

const Section6 = () => {
    return (
        <div className="introduction_video">
            <div className="video">
                <div className="text">
                    <p><img src={assets.rectangle} alt=""/> Company intro video</p>
                    <h1>See our intro video and lets start your dream project.</h1>
                </div>
                <div className="photo">
                    <img src={assets.leafs} alt=""/>
                </div>
            </div>
            <div className="reports">
                <div className="each_section">
                    <h1>847 +</h1>
                    <p><img src={assets.rectangle} alt=""/>Project Done</p>
                </div>

                <div className="each_section">
                    <h1>753 +</h1>
                    <p><img src={assets.rectangle} alt=""/>Happy Client</p>
                </div>

                <div className="each_section">
                    <h1>284 +</h1>
                    <p><img src={assets.rectangle} alt=""/>Team Member</p>
                </div>

                <div className="each_section">
                    <h1>98 +</h1>
                    <p><img src={assets.rectangle} alt=""/>Winning Award</p>
                </div>


            </div>
        </div>
    );
};

export default Section6;