import React from 'react';
import "./section_5.css"
import {assets} from "../../assets/assets";

const Section5 = () => {
    return (
        <div className="section_5">
            <div className="empty_box"></div>
            <div className="main_content">
                <div className="title">
                    <p><img src={assets.rectangle} alt=""/> Team Members</p>
                    <h1>Farmzi feel proud for skilled team members.</h1>
                </div>
                <div className="cards">
                    <div className="each_cart">
                    <div className="photo">
                        <img src={assets.Shoshana_Horsley} alt=""/>
                    </div>
                    <div className="text">
                        <p><img src={assets.rectangle} alt=""/>Founder of Farmzi</p>
                        <h3>Shoshana Horsley</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and industry has been the indust.</p>
                    </div>
                </div>

                    <div className="each_cart">
                        <div className="photo">
                            <img src={assets.Kristofer_Pennell} alt=""/>
                        </div>
                        <div className="text">
                            <p><img src={assets.rectangle} alt=""/>Senior Gardener</p>
                            <h3>Kristofer Pennell</h3>
                            <p>It is a long established fact that a reader
                                will distracted the readable content.</p>
                        </div>
                    </div>

                    <div className="each_cart">
                        <div className="photo">
                            <img src={assets.Matthew_Jackson} alt=""/>
                        </div>
                        <div className="text">
                            <p><img src={assets.rectangle} alt=""/>Garden Designer</p>
                            <h3>Matthew Jackson</h3>
                            <p>There are many variations of passages of Lorem Ipsum
                                available, but the majority</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;