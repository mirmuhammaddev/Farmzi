import React from 'react';
import Section1 from "../components/section_1/section_1";
import Section2 from "../components/section_2/section_2";
import Section3 from "../components/section_3/section_3";
import Section4 from "../components/section_4/section_4";
import Section5 from "../components/section_5/section_5";
import Section6 from "../components/section_6/section_6";
import Section7 from "../components/section_7/section_7";
import Section8 from "../components/section_8/section_8";
import Section9 from "../components/section_9/section_9";
import Section10 from "../components/section_10/section_10";
import Section11 from "../components/section_11/section_11";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7 deviceType={"desktop"}/>
            <Section8/>
            <Section9/>
            <Section10/>
        </>
    );
};

export default HomePage;