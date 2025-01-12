import React from 'react';
import "./section_2.css"
import {assets} from "../../assets/assets";

const Section2 = () => {
    return (
        <div className="section_2">
            <div className="title">
                <p><img src={assets.rectangle} alt=""/> About Company</p>
                <h2>Farmzi have 35 years of experience and know smart way to grow and design your beautiful garden.</h2>
            </div>
             <div className="body">
                 <div className="left">
                     <img src={assets.sec_2_photo} alt=""/>
                 </div>
                 <div className="right">
                     <div className="text_row">
                      <div className="introduction">
                          <h3>Who we are?</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typeset industry.
                              Lorem Ipsum has been the industry's standard dumm ever since the 1500s,
                              when an unknown printer took a galley scrambled it make a type specimen book.</p>
                          <h5>“Lorem Ipsum is simply dummy text of the printn industry lorem epsum has been
                              the industry and scrambled it make a type specimen book”.</h5>
                      </div>
                     <div className="mission">
                             <h3>Mission and vision</h3>
                             <p>Lorem Ipsum is simply dummy text of the printing and typeset industry.
                                 Lorem Ipsum has been the industry's standard dumm ever since the 1500s,
                                 when an unknown printer took a galley scrambled it make a type specimen book.</p>
                             <p>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem
                                 Ipsum has been the industry's standard dumm scrambled it make a type specimen book.</p>
                         </div>
                     </div>
                     <div className="button">
                         <button>Learn More +</button>
                     </div>
                 </div>
             </div>
             </div>

    );
};

export default Section2;