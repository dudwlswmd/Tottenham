import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  return (
    <div className="slider_wrap">
      <Slider {...settings}>
        <div>
          <img className="pc" src="./images/banner01.png" alt="pc"/>
          <img className="mobile" src="./images/banner01_m.png" alt="mobile"/>
        </div>
        <div>
          <img className="pc" src="./images/banner02.png" alt="pc"/>
          <img className="mobile" src="./images/banner02_m.png" alt="mobile"/>
        </div>
        <div>
          <img className="pc" src="./images/banner03.png" alt="pc"/>
          <img className="mobile" src="./images/banner03_m.png" alt="mobile"/>
        </div>      
      </Slider>
          <div className='absolute w-full top-1/3 text-center bg-brand/70'>
              <img className=" w-36 m-auto mb-4 relative -left-10 opacity-50" src="./images/logo2.png" alt="배너안로고" />
          </div>
    </div>
  );
}