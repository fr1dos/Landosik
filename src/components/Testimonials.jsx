import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperContent } from "./Testimonial-Data"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules 
import { Pagination, Navigation } from 'swiper/modules';



const Testimonials = () => {
  const isMobile = window.innerWidth <= 574;

  return (
    <>
      <section className="heading-article">
        <div className="heading-article_heading">
          <h2>Testimonials</h2>
        </div>
        <p className="heading-article_text">Hear from Our Satisfied Clients: Read Our Testimonials <br />to Learn More about Our Digital Marketing Services </p>
      </section>
      <section className="slider-container">
        <div className="slider-testimonials">
          <div className="testimonials-cards slider">
              <Swiper
              
                slidesPerView={isMobile ? 1 : 2}
                spaceBetween={50}
                loop={true}
                centeredSlides={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  type: 'bullets',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {swiperContent.map((content, index) => (
                  <SwiperSlide key={index}>
                    <div id={`slide-${index+1}`} className="testimonial-card slide">
                      <div className="bubble">
                        <p>{content.bubbleText}</p>
                      </div>
                      <div className="testimonial-undertext">
                        <h4>{content.name}</h4>
                        <p>{content.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="button-Attrangment">
                  <div className="button-swiper">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
