import Carousel from "react-multi-carousel";
import "./section_7.style.css"
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
const Section7 = ({deviceType}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max:464, min: 0},
            items: 1
        }
    };
    const items = [
        { id: 1, title: "Farm Design" },
        { id: 2, title: "Urban Gardening" },
        { id: 3, title: "Landscape Planning" },
    ];
    return (
        <div>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={false}
                autoPlay={deviceType !== "mobile"}
                /*autoPlaySpeed={1000}*/
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {items.map((item) => {
                    return (
                        <div className={"each_item"} key={item.id}>
                            <div className="info_card">
                                <p>Project:</p>
                                <h4>Farm Design</h4>
                                <p>Client:</p>
                                <h4>Alex Milan</h4>
                                <p>Location:</p>
                                <h4>Mississippi, USA</h4>
                            </div>

                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default Section7;


































/*import React, { useEffect, useState } from 'react';
import "./section_7.style.css";
import { assets } from "../../assets/assets";

const Section7 = () => {
    const data = [
        { button: 'left' },
        { button: 'right' }
    ];

    const [index, setIndex] = useState(data.length > 3 ? data.length - 1 : 2);
    const [right, setRight] = useState(1);
    const [current, setCurrent] = useState(0);
    const [left, setLeft] = useState(-1);

    function next() {
        setCurrent(current === index ? 0 : current + 1);
        setRight(right === index ? 0 : right - 1);
        setLeft(left === index ? 0 : left + 1);
    }

    function prev() {
        setCurrent(current === index ? 0 : current - 1);
        setRight(right === index ? 0 : right + 1);
        setLeft(left === index ? 0 : left - 1);
    }

    return (
        <div className="section-7_cards">
            <div className="all_photo_cards">
                {[left, current, right].map((idx) => (
                    <div key={idx} className="each_photo_card">
                        <div className="info_card">
                            <div className="all_sections">
                                <div className="each_section">
                                    <p>Project:</p>
                                    <h4>Farm Design</h4>
                                </div>
                                <div className="each_section">
                                    <p>Client:</p>
                                    <h4>Alex Milan</h4>
                                </div>
                                <div className="each_section">
                                    <p>Location:</p>
                                    <h4>Mississippi, USA</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="buttons">
                <button onClick={() => prev()}><img src={assets.arrow2} alt="Previous" /></button>
                <button onClick={() => next()}><img src={assets.arrow} alt="Next" /></button>
            </div>
        </div>
    );
};*/
/*import React, { useState } from 'react';
import "./section_7.style.css";
import { assets } from "../../assets/assets";

const Section7 = () => {
    const data = [
        { button: 'left' },
        { button: 'right' }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % data.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + data.length) % data.length);
    };

    const left = (current - 1 + data.length) % data.length;
    const right = (current + 1) % data.length;

    return (
        <div className="section-7_cards">
            <div className="all_photo_cards">
                {[left, current, right].map((idx) => (
                    <div key={idx} className="each_photo_card">
                        <div className="info_card">
                            <div className="all_sections">
                                <div className="each_section">
                                    <p>Project:</p>
                                    <h4>Farm Design</h4>
                                </div>
                                <div className="each_section">
                                    <p>Client:</p>
                                    <h4>Alex Milan</h4>
                                </div>
                                <div className="each_section">
                                    <p>Location:</p>
                                    <h4>Mississippi, USA</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button onClick={() => prev()}>
                    <img src={assets.arrow2} alt="Previous" />
                </button>
                <button onClick={() => next()}>
                    <img src={assets.arrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Section7;*/

// export default Section7;

