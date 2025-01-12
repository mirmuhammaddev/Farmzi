import React from 'react';
import "./section_3.style.css"
import {assets} from "../../assets/assets";

const Section3 = () => {
    return (
        <div className="services">
             <div className="service_information">
                 <div className="title">
                     <p><img src={assets.rectangle} alt=""/> Our Services</p>
                     <h2>Farmzi always provide amazing gardening and landscaping services.</h2>
                 </div>
                 <div className="carts">
                     <div className="each_cart">
                         <img src={assets.sec_3_photo_1} alt=""/>
                         <div className="landscaping_services">
                             <p><img src={assets.rectangle} alt=""/>Flower</p>
                             <h5>Planting Flower</h5>
                         </div>
                     </div>

                     <div className="each_cart">
                         <img src={assets.sec_3_photo_2} alt=""/>
                         <div className="landscaping_services">
                             <p><img src={assets.rectangle} alt=""/>Planting</p>
                             <h5>Tree Planting</h5>
                         </div>
                     </div>

                     <div className="each_cart">
                         <img src={assets.sec_3_photo_3} alt=""/>
                         <div className="landscaping_services">
                             <p><img src={assets.rectangle} alt=""/>Rush</p>
                             <h5>Rush Removal</h5>
                         </div>
                     </div>

                     <div className="each_cart">
                         <img src={assets.sec_3_photo_4} alt=""/>
                         <div className="landscaping_services">
                             <p><img src={assets.rectangle} alt=""/>Watering</p>
                             <h5>Garden Watering</h5>
                         </div>
                     </div>
                 </div>
             </div>
            <div className="more_service_button">
                <button>More Service +</button>
            </div>
        </div>
    );
};

export default Section3;