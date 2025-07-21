import React from "react";

const Testimonials = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Testimonials</h2></div>
          <p className="heading-article_text">Hear from Our Satisfied Clients: Read Our Testimonials <br />to Learn More about Our Digital Marketing Services</p>
        </section>
        <section className="slider-container">
            <div className="slider-testimonials">
              <div className="testimonials-cards slider">
                <div id="slide-1" className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
                <div id="slide-2" className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
                <div id="slide-3" className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
                <div id="slide-4" className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
                <div id="slide-5" className="testimonial-card slide">
                  <div className="bubble">
                    <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                  </div>
                  <div className="testimonial-undertext">
                    <h4>John Smith</h4>
                    <p>Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              </div>
              <div className="slider-navigation thumbnails">
                <div className="navigation-sliding">
                  <a href="#slide-1">
                    <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-2">
                    <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-3">
                    <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-4">
                    <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-5">
                    <img src="./testimonials-slider-star.svg" alt="" className="slider-navigation-stars" />
                  </a>
                </div>
              </div>
            </div>
        </section>
      </>
    )
}

export default Testimonials