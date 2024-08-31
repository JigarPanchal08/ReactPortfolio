import React, { useRef } from "react";
import './WorkExperience.css'
import { WorkExperiences } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint : 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        slideRef.current.slickNext();
    };
    const slideLeft = () => {
        slideRef.current.slickPrev();
    };
  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </div>
            <Slider ref={slideRef} {...settings}>
            {
                WorkExperiences.map((item) => {
                    return(
                        <ExperienceCard 
                            key={item.title} details={item}
                            />
                    );
                })
            }
            </Slider>
        </div>
    </section>
  )
};

export default WorkExperience;
