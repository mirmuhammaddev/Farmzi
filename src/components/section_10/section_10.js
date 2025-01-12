import React from 'react';
import "./section_10.style.css"
import {assets} from "../../assets/assets";

const Section10 = () => {
    return (
        <div className="logos">
            <img src={assets.natural_logo_1} alt=""/>
            <img src={assets.natural_logo_2} alt=""/>
            <img src={assets.natural_logo_3} alt=""/>
            <img src={assets.natural_logo_4} alt=""/>
            <img src={assets.natural_logo_5} alt=""/>
        </div>
    );
};

export default Section10;