import React from 'react';
import "./section_9.style.css"
import {assets} from "../../assets/assets";

const Section9 = () => {
    return (
        <div className="News_page">
            <div className="News_title">
                <p><img src={assets.rectangle} alt=""/>Latest News</p>
                <h1>Check now latest tips and tricks of gardening and landscaping from blog.</h1>
            </div>
            <div className="news_cards">
                <div className="each_new_card">
                    <img src={assets.last_section_1} alt=""/>
                    <div className="description_of_news">
                        <div className="data_of_manufacturing">
                            <p><span>Data:</span>March 23, 2022</p>
                            <p><span>By:</span>Kristofer Pennell</p>
                        </div>
                        <h3>If You're Not Getting Your Garden Harvested Things!</h3>
                        <p>Lorem Ipsum is simply dummy text the printing and tpesetting
                            industry. Lorem industry's standard dummy.</p>
                        <button>Read More +</button>
                    </div>
                </div>

                <div className="each_new_card">
                    <img src={assets.last_section_2} alt=""/>
                    <div className="description_of_news">
                        <div className="data_of_manufacturing">
                            <p><span>Data:</span>March 23, 2022</p>
                            <p><span>By:</span>Kristofer Pennell</p>
                        </div>
                        <h3>How to Plant Flowers with a Success Rate of 90% or Higher!</h3>
                        <p>Lorem Ipsum is simply dummy text the printing and tpesetting
                            industry. Lorem industry's standard dummy.</p>
                        <button>Read More +</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section9;