import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules 
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
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
              slidesPerView={2}
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
              <SwiperSlide>
                <div id='slide-1' className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id='slide-2' className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id='slide-3' className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id='slide-4' className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id='slide-5' className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </SwiperSlide>
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
