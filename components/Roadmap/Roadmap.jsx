"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "./Roadmap.css";

const MILESTONES = [
  { date: "January 2024", title: "Research" },
  { date: "March 2024", title: "App Beta Test" },
  { date: "September 2024", title: "Token Test" },
  { date: "April 2025", title: "Alpha Test" },
  { date: "August 2025", title: "Concept" },
];

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function Roadmap() {
  const sliderRef = useRef(null);

  return (
    <div className="pt-130 pb-140 overflow-hidden bg-black2 position-relative z-index-common" id="roadMap">
      <div className="bg-gradient-2">
        <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-sm-8">
            <div className="section-title mb-50">
              <h2 className="title style2">Our Roadmap</h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="icon-box">
              <button
                className="slider-arrow prev-btn default"
                aria-label="Previous"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                className="slider-arrow next-btn default"
                aria-label="Next"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="slider-area position-relative">
          <Slider ref={sliderRef} {...SLIDER_SETTINGS} className="row roadMap-active2 roadmap-slider1">
            {MILESTONES.map((milestone) => (
              <div className="col-lg-4" key={milestone.date}>
                <div className="roadmap-item">
                  <span className="roadmap-title">{milestone.date}</span>
                  <div className="roadmap-content">
                    <h4 className="title">
                      <span className="dot"></span>
                      {milestone.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
