// import { useState } from 'react'


function App() {
  const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

console.log("Ширина видимой области:", viewportWidth);
console.log("Высота видимой области:", viewportHeight);

  return (
    <>
    <div className="landing-page">
      <div className="landing-page_padding">
        <header>
          <div className="navigation-bar">
            <div className="logo">
              <img className="positivus-logo" src="PositivusLogo.png" alt="Positivus"/>
            </div>
            <nav className="navigation-bar_nav">
              <ul className="navigation-bar_nav_list">
                <li className="navigation-bar_nav_list__item">About us</li>
                <li className="navigation-bar_nav_list__item">Services</li>
                <li className="navigation-bar_nav_list__item">Use Cases</li>
                <li className="navigation-bar_nav_list__item">Pricing</li>
                <li className="navigation-bar_nav_list__item">Blog</li>
              </ul>
              <a href=""><button className="navigation-bar_button_request">Request a quote</button></a>
            </nav>
          </div>
          <div className="header-main">
            <div className="header-main_text">
              <h1 className="header-main_text_h1">Navigating the digital landscape for success</h1>
              <p className="header-main_text_p">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <a href=""><button className="header-main_consultation">Book a consultation</button></a>
            </div>
            <div className="header-main_img">
              <img className="gramophone" src="./gramophone.png" alt="gramophone" />
            </div>
          </div>
          <div className="logotypes">
            <img className="logotypes-logo" src="./amazon.png" alt="Amazon" />
            <img className="logotypes-logo" src="./dribble.png" alt="Dribbble" />
            <img className="logotypes-logo" src="./HubSpot.png" alt="HubSpot" />
            <img className="logotypes-logo" src="./Notion.png" alt="Notion" />
            <img className="logotypes-logo" src="./Netflix.png" alt="Netflix" />
            <img className="logotypes-logo" src="./Zoom.png" alt="Zoom" />
          </div>
        </header>
        <main>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Services</h2></div>
            <p className="heading-article_text"><span>At our digital marketing agency, we offer a range of services to </span><span>help businesses grow and succeed online. These services include:</span> </p>
          </article>
          <aside className="services">
            <div className="services-cards">
              <div className="cards-section">
                <div className="card card_grey">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_lightgreen">Search engine</h3>
                        <h3 className="card_heading_h3 heading_background_lightgreen">optimization</h3>
                      </div>
                      <a className="card_link_href_black" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                          <p>Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_magnifyingglass" src="magnifyingglass.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card card_lightgreen">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_white">Pay-per-click</h3>
                        <h3 className="card_heading_h3 heading_background_white">advertising</h3>
                      </div>
                      <a className="card_link_href_black" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                          <p>Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_windowarrow" src="windowandarrow.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-section center-card-section">
                <div className="card card_darkblue">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_white">Social Media</h3>
                        <h3 className="card_heading_h3 heading_background_white">Markreting</h3>
                      </div>
                      <a className="card_link_href_white" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./blackandwhitearrow.png" alt="arrow"/>
                          <p className="card_link_text_white">Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_windowsmile" src="windowsmile.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card card_grey">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_lightgreen">Search engine</h3>
                        <h3 className="card_heading_h3 heading_background_lightgreen">optimization</h3>
                      </div>
                      <a className="card_link_href_black" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                          <p>Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_blackholes" src="blackholes.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards-section">
                <div className="card card_lightgreen">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_white">Pay-per-click</h3>
                        <h3 className="card_heading_h3 heading_background_white">advertising</h3>
                      </div>
                      <a className="card_link_href_black" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                          <p>Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_windows" src="windows.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card card_darkblue">
                  <div className="card-padding">
                    <div className="card_text">
                      <div className="card_heading">
                        <h3 className="card_heading_h3 heading_background_lightgreen">Social Media</h3>
                        <h3 className="card_heading_h3 heading_background_lightgreen">Markreting</h3>
                      </div>
                      <a className="card_link_href_white" href="">
                        <div className="card_link">
                          <img className="card_arrow" src="./blackandwhitearrow.png" alt="arrow"/>
                          <p className="card_link_text_white">Learn more</p>
                        </div>
                      </a>
                    </div>
                    <div className="card_illustration">
                      <img className="card_illustration_img card_illustration_diagrams" src="diagrams.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="proposal">
            <div className="proposal-padding">
              <div className="proposal-text">
                <h3 className="proposal_h3">Let’s make things happen</h3>
                <p className="proposal_p">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <a href=""><button className="proposal_button">Get your free proposal</button></a>
              </div>
              <div className="proposal-illustration">
                <img className="proposal-illustration_img" src="./stars.png" alt="" />
              </div>
            </div>
          </div>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Case Studies</h2></div>
            <p className="heading-article_text"><span>Explore Real-Life Examples of Our Proven Digital Marketing</span> <span>Success through Our Case Studies</span></p>
          </article>
          <section className="case-studies">
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <div className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./greenarrow.png" alt="" />
              </div>
            </div>
            <div class="vertical-line"></div>
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
              <div className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./greenarrow.png" alt="" />
              </div>
            </div>
            <div class="vertical-line"></div>
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
              <div className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./greenarrow.png" alt="" />
              </div>
            </div>
          </section>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Our Working Process </h2></div>
            <p className="heading-article_text"><span>Step-by-Step Guide to Achieving</span><span>Your Business Goals</span></p>
          </article>
          <section>
            <div className="working-process first-working-process">
              <div className="working-process-cell-header">
                <h1>01</h1>
                <h3>Consultation</h3>
                <a href=""><img className="" src="./minusicon.png" alt="" /></a>
              </div>
              <hr />
              <div className="working-process-cell-text">
                <p><span>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing </span><span> efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</span></p>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h1>02</h1>
                <h3>Research and Strategy Development</h3>
                <a href="">
                  <img className="" src="./plusicon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h1>03</h1>
                <h3>Implementation</h3>
                <a href="">
                  <img className="" src="./plusicon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h1>04</h1>
                <h3>Monitoring and Optimization</h3>
                <a href="">
                  <img className="" src="./plusicon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h1>05</h1>
                <h3>Reporting and Communication</h3>
                <a href="">
                  <img className="" src="./plusicon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h1>06</h1>
                <h3>Continual Improvement</h3>
                <a href="">
                  <img className="" src="./plusicon.png" alt="" />
                </a>
              </div>
            </div>
          </section>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Team </h2></div>
            <p className="heading-article_text"><span>Meet the skilled and experienced team behind our </span><span>successful digital marketing strategies</span></p>
          </article>
          <section className="team">
            <div className="teammates-row">
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div><div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>
            <div className="teammates-row">
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./flowerface.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </div>
                  <img className="linkedin" src="./linkedin.png" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
              </div>
            </div>
            <a href=""><button className="team_button">See all team</button></a>
          </section>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Testimonials</h2></div>
            <p className="heading-article_text"><span>Hear from Our Satisfied Clients: Read Our Testimonials </span><span>to Learn More about Our Digital Marketing Services</span></p>
          </article>
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
              </div>
              <div className="slider-navigation thumbnails">
                <div className="starsliding">
                  <a href="#slide-1">
                    <img src="./starsliding.png" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-2">
                    <img src="./starsliding.png" alt="" className="slider-navigation-stars" />
                  </a>
                  <a href="#slide-3">
                    <img src="./starsliding.png" alt="" className="slider-navigation-stars" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <article className="heading-article">
            <div className="heading-article_heading"><h2>Contact Us</h2></div>
            <p className="heading-article_text"><span>Connect with Us: Let's Discuss Your </span><span>Digital Marketing Needs</span></p>
          </article>
          <aside className="contact">
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
                  <label for="username">Name</label> <input type="text" id="Name" placeholder="Name" className="contact-field_input"/>
                </div>
                <div className="contact-form-label-container">
                  <label for="email">Email</label> <input type="Email" id="Email" placeholder="Email" className="contact-field_input"/>
                </div>
                <div className="contact-form-label-container">
                  <label for="message">Message</label> <input type="text" id="Name" placeholder="Message" className="contact-field_input contact-fied_input_message"/>
                </div>
              </div>
              <a href=""><button className="contact-form_button">Send Message</button></a>
            </section>
            <div className="contact-illustration">
              <img src="./contactstars.png" alt="" />
            </div>
          </aside>
          <footer>
            <div className="footer-head">
              <div className="footer-head-links-and-logotypes">
                <img className="whitepositivus-logo" src="whitelogopositivus.png" alt="Positivus"/>
                <div className="footer-head-links">
                  <a href="">About us</a>
                  <a href="">Services</a>
                  <a href="">Use Cases</a>
                  <a href="">Pricing</a>
                  <a href="">Blog</a>
                </div>
                <div className="footer-head-logotypes">
                  <img src="whitelinkedin.png" alt="linkedin" />
                  <img src="whitefacebook.png" alt="facebook" />
                  <img src="whitetwitter.png" alt="twitter" />
                </div>
              </div>
              <div className="footer-body">
                <div className="footer-body-contact">
                  <h4>Contact us:</h4>
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p><span>Address: 1234 Main St</span> <span>Moonstone City, Stardust State 12345</span></p>
                </div>
                <div className="footer-body-subscription">
                  <input className="footer-body-subscription_input" type="Email" name="Email" id="footer-Email" placeholder="Email"/>
                  <a href=""><button className="footer-body-subscription_button">Subscribe to news</button></a>
                </div>
              </div>
            </div>
            <hr />
            <div className="footer-privacy">
              <p>© 2023 Positivus. All Rights Reserved.</p>
              <a href="">Privacy Policy</a>
            </div>
          </footer>
        </main>
      </div>
      
    </div>
    </>
  )
}

export default App
