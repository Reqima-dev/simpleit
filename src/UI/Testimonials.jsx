import React, { useState } from "react";
import "../styles/servicearea.css";
import "../styles/testimonials.css";
import { testiData } from "../data/testimonialsData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "15",
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <div className="service_area testimonial-area">
      <div className="service_areaContent">
        <div className="headArea">
          <span className="site-title-tagline">TÉMOIGNAGES</span>
          <h2 className="site-title">
            Ce que dit <span>le client</span>
          </h2>
          <div className="heading-divider"></div>
          <p>
            Chaque client à son mot à dis sur chaque service que nous lui avion servir
          </p>
        </div>

        <div class="testimonials-carousel-wrap">
          <Slider {...settings}>
            {testiData.map((index, i) => {
              return (
                <div
                  className={
                    i === slideIndex
                      ? " swiper-slide swiper-slide_active"
                      : "swiper-slide"
                  }
                  key={i}
                >
                  <div className="testi-avatar">
                    <img src={index.avatar} alt="" loading="lazy" />
                  </div>
                  <div className="testimonial-text-before">
                    <i class="bx bxs-quote-right"></i>
                  </div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star-half"></i>
                    </div>
                    <p>{index.paragraph}</p>
                    <div className="testimonails-avatar">
                      <h3>{index.nameAvatar} </h3>
                      <h4>{index.occupation}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
