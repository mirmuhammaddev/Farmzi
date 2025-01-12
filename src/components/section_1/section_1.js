import React from 'react';
import {assets} from "../../assets/assets"
import "./section_1.style.css"

const Section1 = () => {
    return (
        <div className="main_section">
            <div className="context">
                <div className="left_side">
                        <div className="info">
                            <p className="author"><img src={assets.rectangle} alt=""/>
                                Make a garden with mission.
                            </p>
                            <h3>If you have a garden and a library, you have everything you need. </h3>
                            <p className="author"><img src={assets.rectangle} alt=""/> Marcus Tullius Cicero</p>
                        </div>
                        <div className="all_service">
                            <button>All Services +</button>
                        </div>
                </div>
                <div className="right_side">
                    <img src={assets.main_photo} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Section1;