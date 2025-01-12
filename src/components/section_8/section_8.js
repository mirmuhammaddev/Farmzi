import React from 'react';
import "./section_8.style.css"
import {assets} from "../../assets/assets";

const Section8 = () => {
    return (
        <div className="comments">
            <div className="title">
                <p><img src={assets.rectangle} alt=""/>Happy Clients</p>
                <h1>Farmzi got best feedback from happy clients</h1>
            </div>
            <div className="all_comments">
                <div className="each_comments">
                    <h5>“Lorem Ipsum is simply dummy text the printing and typesetting industry.
                        Lorem has been the industry's standard dummy text since the 1500
                        when an unknown printer took galley type and scram bled it
                        make a type specimen book</h5>
                    <div className="name_of_person">
                        <p><img src={assets.rectangle} alt=""/>Designer of Musion</p>
                        <h3>Rachel Patterson</h3>
                    </div>
                </div>

                <div className="each_comments">
                    <h5>“Lorem Ipsum is simply dummy text the printing and typesetting industry.
                        Lorem has been the industry's standard dummy text since the 1500
                        when an unknown printer took galley type and scram bled it
                        make a type specimen book</h5>
                    <div className="name_of_person">
                        <p><img src={assets.rectangle} alt=""/>Designer of Musion</p>
                        <h3>Rachel Patterson</h3>
                    </div>
                </div>

                <div className="each_comments">
                    <h5>“Lorem Ipsum is simply dummy text the printing and typesetting industry.
                        Lorem has been the industry's standard dummy text since the 1500
                        when an unknown printer took galley type and scram bled it
                        make a type specimen book</h5>
                    <div className="name_of_person">
                        <p><img src={assets.rectangle} alt=""/>Designer of Musion</p>
                        <h3>Rachel Patterson</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section8;