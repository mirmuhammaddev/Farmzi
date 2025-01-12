import React from 'react';
import "./section_4.style.css"
import {assets} from "../../assets/assets";

const Section4 = () => {
    return (
        <div className="contact_with_farmzi">
            <div className="contact_text">
                <p><img src={assets.rectangle} alt=""/> Call To Action</p>
                <h2>If you need any gardening service, you can contact with Farmzi.</h2>
            </div>
                <button className="contact_button">
                    <div className="phone_img">
                        <img src={assets.phone_icon} alt=""/>
                    </div>
                    <div className="phone_number">
                        <p className="label">Our Services</p>
                        <p>+00 89 458 648</p>
                    </div>
                </button>
        </div>
    );
};

export default Section4;