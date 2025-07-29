import React from "react";
import { Splide, SplideSlide, SplideTracks } from '@splidejs/react-splide';

const slidesIds = [1, 2, 3, 4, 5];

function Slide({ id }) {
  return (
    <div id={`slide-${id}`} className="testimonial-card slide">
      <div className="bubble">
        <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
      </div>
      <div className="testimonial-undertext">
        <h4>John Smith</h4>
        <p>Marketing Director at XYZ Corp</p>
      </div>
    </div>
  );
}

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
            {slidesIds.map((id) => (
              <Slide key={id} id={id} />
            ))}
          </div>
          <div className="slider-navigation thumbnails">
            <div className="navigation-sliding">
              {slidesIds.map((id) => (
                <a key={id} href={`#slide-${id}`}>
                  <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
