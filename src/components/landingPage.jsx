// import { useState } from 'react'


function App() {
  const windowHeight = window.innerHeight;
console.log("The current window height is:", windowHeight, "pixels.");
const windowWidth = window.innerWidth;
console.log("The current window width is: " + windowWidth + " pixels.");

  return (
    <div className="landing-page">
      <div className="landing-page_padding">
        <header>
          <div className="navigation-bar">
            <div className="logo">
              <img className="positivus-logo" src="header-black-positivus-logo.svg" alt="Positivus"/>
            </div>
            <nav className="navigation-bar_nav">
              <ul className="navigation-bar_nav_list">
                <li className="navigation-bar_nav_list__item">About us</li>
                <li className="navigation-bar_nav_list__item">Services</li>
                <li className="navigation-bar_nav_list__item">Use Cases</li>
                <li className="navigation-bar_nav_list__item">Pricing</li>
                <li className="navigation-bar_nav_list__item">Blog</li>
              </ul>
              <button className="navigation-bar_button_request">Request a quote</button>
            </nav>
          </div>
          <div className="header-main">
            <div className="header-main_text">
              <h1 className="header-main_text_h1">Navigating the <br /> digital landscape <br />for success</h1>
              <p className="header-main_text_p">Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br /> services including SEO, PPC, social media marketing, <br /> and content creation.</p>
              <button className="header-main_consultation">Book a consultation</button>
            </div>
            <div className="header-main_img">
              <img className="gramophone" src="./header-main-gramophone.png" alt="gramophone" />
            </div>
          </div>
          <div className="logotypes">
            <img className="logotypes-logo" src="./header-logotype-amazon.svg" alt="Amazon" />
            <img className="logotypes-logo" src="./header-logotype-dribble.svg" alt="Dribbble" />
            <img className="logotypes-logo" src="./header-logotype-hubspot.svg" alt="HubSpot" />
            <img className="logotypes-logo" src="./header-logotype-notion.svg" alt="Notion" />
            <img className="logotypes-logo" src="./header-logotype-netflix.svg" alt="Netflix" />
            <img className="logotypes-logo" src="./header-logotype-zoom.svg" alt="Zoom" />
          </div>
        </header>
        <main>
          <section className="heading-article">
            <div className="heading-article_heading"><h2>Services</h2></div>
            <p className="heading-article_text">At our digital marketing agency, we offer a range of services to <br />help businesses grow and succeed online. These services include: </p>
          </section>
          <aside className="services">
            <div className="services-cards">
                <div className="card card_grey">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_lightgreen">Search engine</h3>
                        <h3 className="card_heading_h3 heading_background_lightgreen">optimization</h3>
                      </div>
                        <button className="card_link">
                          <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                          <p>Learn more</p>
                        </button>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_magnifyingglass" src="card-illustration-magnifying_glass.svg" alt="" />
                    </div>
                </div>
                <div className="card card_lightgreen">
                  <div className="card_text">
                    <div className="card_heading">
                      <h3 className="card_heading_h3 heading_background_white">Pay-per-click</h3>
                      <h3 className="card_heading_h3 heading_background_white">advertising</h3>
                    </div>
                      <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                        <p>Learn more</p>
                      </button>
                  </div>
                  <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_windowarrow" src="card-illustration-window_arrow.svg" alt="" />
                  </div>
                </div>
                <div className="card card_darkblue">
                  <div className="card_text">
                    <div className="card_heading">
                      <h3 className="card_heading_h3 heading_background_white">Social Media</h3>
                      <h3 className="card_heading_h3 heading_background_white">Markreting</h3>
                    </div>
                      <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-black.svg" alt="arrow"/>
                        <p className="card_link_text_white">Learn more</p>
                      </button>
                  </div>
                  <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_windowsmile" src="card-illustration-window_smile.png" alt="" />
                  </div>
                </div>
                <div className="card card_grey">
                  <div className="card_text">
                    <div className="card_heading">
                      <h3 className="card_heading_h3 heading_background_lightgreen">Email</h3>
                      <h3 className="card_heading_h3 heading_background_lightgreen">Marketing</h3>
                    </div>
                      <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                        <p>Learn more</p>
                      </button>
                  </div>
                  <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_blackholes" src="card-illustration-blackholes.png" alt="" />
                  </div>
                </div>
                <div className="card card_lightgreen">
                  <div className="card_text">
                    <div className="card_heading">
                      <h3 className="card_heading_h3 heading_background_white">Content</h3>
                      <h3 className="card_heading_h3 heading_background_white">Creation</h3>
                    </div>
                      <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                        <p>Learn more</p>
                      </button>
                  </div>
                  <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_windows" src="card-illustration-windows.png" alt="" />
                  </div>
                </div>
                <div className="card card_darkblue">
                  <div className="card_text">
                    <div className="card_heading">
                      <h3 className="card_heading_h3 heading_background_lightgreen">Analytics and</h3>
                      <h3 className="card_heading_h3 heading_background_lightgreen">Tracking</h3>
                    </div>
                      <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-black.svg" alt="arrow"/>
                        <p className="card_link_text_white">Learn more</p>
                      </button>
                  </div>
                  <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_diagrams" src="card-illustration-diagrams.png" alt="" />
                  </div>
                </div>
              </div>
          </aside>
          <div className="proposal">
            <div className="proposal-text">
              <h3 className="proposal_h3">Let’s make things happen</h3>
              <p className="proposal_p">Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online.</p>
              <button className="proposal_button">Get your free proposal</button>
            </div>
            <div className="proposal-illustration">
              <img className="proposal-illustration_img" src="./proposal-illustration-stars.svg" alt="" />
            </div>
          </div>
          <section className="heading-article">
            <div className="heading-article_heading"><h2>Case Studies</h2></div>
            <p className="heading-article_text">Explore Real-Life Examples of Our Proven Digital Marketing <br />Success through Our Case Studies</p>
          </section>
          <section className="case-studies">
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
            <hr class="vertical-line" />
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
            <div class="vertical-line"></div>
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
          </section>
          <section className="heading-article">
            <div className="heading-article_heading"><h2>Our Working Process </h2></div>
            <p className="heading-article_text">Step-by-Step Guide to Achieving<br />Your Business Goals</p>
          </section>
          <section>
            <div className="working-process first-working-process">
              <div className="working-process-cell-header">
                <h6>01</h6>
                <h3>Consultation</h3>
                <img className="" src="./working-process-minus-icon.svg" alt="" />
              </div>
              <hr />
              <div className="working-process-cell-text">
                <p><span>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing </span><span> efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</span></p>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>02</h6>
                <h3>Research and Strategy Development</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>03</h6>
                <h3>Implementation</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>04</h6>
                <h3>Monitoring and Optimization</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>05</h6>
                <h3>Reporting and Communication</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>06</h6>
                <h3>Continual Improvement</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
          </section>
          <section className="heading-article">
            <div className="heading-article_heading"><h2>Team </h2></div>
            <p className="heading-article_text">Meet the skilled and experienced team behind our <br />successful digital marketing strategies</p>
          </section>
          <section className="team">
            <div className="teammates-gap">
            <div className="teammates-cell">
              <div className="teammates-cell-person">
                <img className="teammates-cell-person_flowerface" src="./team-john-smit.png" alt="" />
                <div className="teammates-cell-person_text">
                  <h4>John Smith</h4>
                  <p>CEO and Founder</p>
                </div>
                <img className="linkedin" src="./team-linkedin.svg" alt="" />
              </div>
                <hr />
              <p className="teammates-cell-text">10+ years of experience in digital <br /> marketing. Expertise in SEO, PPC, <br /> and content strategy</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-jane-doe.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Jane Doe</h4>
                    <p>Director of Operations</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">7+ years of experience in project <br /> management and team leadership. <br /> Strong organizational and <br /> communication skills</p>
              </div><div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-michael-brown.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Michael Brown</h4>
                    <p>Senior SEO Specialist</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">5+ years of experience in SEO and <br /> content creation. Proficient in <br /> keyword research and on-page <br /> optimization</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-emily-johnson.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Emily Johnson</h4>
                    <p>PPC Manager</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">3+ years of experience in paid <br /> search advertising. Skilled in <br /> campaign management and <br /> performance analysis</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-brian-williams.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Brian Williams</h4>
                    <p>Social Media <br /> Specialist</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">4+ years of experience in social <br /> media marketing. Proficient in <br /> creating and scheduling content, <br /> analyzing metrics, and building <br /> engagement</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-sarah-kim.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Sarah Kim</h4>
                    <p>Content Creator</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">2+ years of experience in writing <br /> and editing <br />Skilled in creating compelling, SEO- <br /> optimized content for various <br /> industries</p>
              </div>
            </div>
            <button className="team_button">See all team</button>
          </section>
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
          <section className="heading-article">
            <div className="heading-article_heading"><h2>Contact Us</h2></div>
            <p className="heading-article_text">Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs</p>
          </section>
          <section className="contact">
            <section className="contact-form">
              <div className="contact-from-radio-buttons">
                <div className="radio">
                  <input type="radio" name="radio" id="radio-1" checked/>
                  <label for="radio-1" className="radio-label">Say Hi</label>
                </div>
                <div className="radio">
                  <input type="radio" name="radio" id="radio-2" checked/>
                  <label for="radio-2" className="radio-label">Get a Quote</label>
                </div>
              </div>
              <div className="contact-form-fields">
                <div className="contact-form-label-container">
                  <label for="username">Name</label> 
                  <input type="text" id="Name" placeholder="Name" className="contact-field_input"/>
                </div>
                <div className="contact-form-label-container">
                  <label for="email">Email*</label> 
                  <input type="Email" id="Email" placeholder="Email" className="contact-field_input"/>
                </div>
                <div className="contact-form-label-container">
                  <label for="message">Message*</label> 
                  <input type="text" id="Name" placeholder="Message" className="contact-field_input contact-fied_input_message"/>
                </div>
              </div>
              <button className="contact-form_button">Send Message</button>
            </section>
            <div className="contact-illustration">
              <img src="./contact-stars.svg" alt="" />
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-head">
            <div className="footer-head-links-and-logotypes">
              <img className="whitepositivus-logo" src="footer-logo-positivus.svg" alt="Positivus"/>
              <div className="footer-head-links">
                <a href="">About us</a>
                <a href="">Services</a>
                <a href="">Use Cases</a>
                <a href="">Pricing</a>
                <a href="">Blog</a>
              </div>
              <div className="footer-head-logotypes">
                <img src="footer-linkedin.svg" alt="linkedin" />
                <img src="footer-facebook.svg" alt="facebook" />
                <img src="footer-twitter.svg" alt="twitter" />
              </div>
            </div>
            <div className="footer-body">
              <div className="footer-body-contact">
                <h4>Contact us:</h4>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
              </div>
              <div className="footer-body-subscription">
                <input className="footer-body-subscription_input"  type="Email" name="Email" id="footer-Email" placeholder="Email"/>
                <button className="footer-body-subscription_button">Subscribe to news</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-privacy">
            <p>© 2025 Positivus. All Rights Reserved.</p>
            <a href="">Privacy Policy</a>
          </div>
        </footer>
      </div>
      
    </div>
  )
}

export default App
