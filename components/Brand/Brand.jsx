"use client";

import Slider from "react-slick";
import "./Brand.css";

const BRANDS = [
  "brand_img01.png",
  "brand_img02.png",
  "brand_img03.png",
  "brand_img04.png",
  "brand_img05.png",
  "brand_img06.png",
  "brand_img07.png",
  "brand_img04.png",
];

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: 1, infinite: true } },
    { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false } },
    { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } },
  ],
};

export default function Brand() {
  return (
    <div className="brand-area2">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-12">
            <div className="brand-title text-center">
              <h6 className="title">Our top Partner</h6>
            </div>
          </div>
        </div>
        <div className="brand-item-wrap style2">
          <Slider {...SLIDER_SETTINGS} className="row g-0 brand-active2">
            {BRANDS.map((image, index) => (
              <div className="col-12" key={index}>
                <div className="brand-item">
                  <img src={`/assets/img/brand/${image}`} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
