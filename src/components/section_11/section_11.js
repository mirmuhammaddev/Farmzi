import React from 'react';
import "./section_11.style.css"
import {assets} from "../../assets/assets";

const Section11 = () => {
    return (
        <div className="ending">
            <div className="all_explanations">
                <div className="each_explanation">
                    <h3>Explore</h3>
                    <div className="links">
                        <p><img src={assets.ending_vector} alt=""/>About Us</p>
                        <p><img src={assets.ending_vector} alt=""/>FAQ</p>
                        <p><img src={assets.ending_vector} alt=""/>Press & Blog</p>
                    </div>
                </div>
                <div className="each_explanation">
                    <h3>Information</h3>
                    <div className="links">
                        <p><img src={assets.ending_vector} alt=""/>Style Guide</p>
                        <p><img src={assets.ending_vector} alt=""/>Change Log</p>
                        <p><img src={assets.ending_vector} alt=""/>License</p>
                    </div>
                </div>
                <div className="each_explanation">
                    <h3>Service</h3>
                    <div className="links">
                        <p><img src={assets.ending_vector} alt=""/>Flower</p>
                        <p><img src={assets.ending_vector} alt=""/>Planting</p>
                        <p><img src={assets.ending_vector} alt=""/>Watering</p>
                    </div>
                </div>

                <div className="ending_logo">
                    <img src={assets.logo} alt=""/>
                    <div className="ending_text">
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typeset industry has been
                            the industry's standard.</p>
                        <div className="phone_number">
                            <div className="phone_icon">
                                <img src={assets.phone_icon} alt=""/>
                            </div>
                            <div className="call_number">
                                <p>Call us:</p>
                                <h4>+00 89 458 648</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section11;