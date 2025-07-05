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
              <button className="navigation-bar_button_request">Request a quote</button>
            </nav>
          </div>
          <div className="header-main">
            <div className="header-main_text">
              <h1 className="header-main_text_h1">Navigating the digital landscape for success</h1>
              <p className="header-main_text_p">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <button className="header-main_consultation">Book a consultation</button>
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
          <article className="services-header">
            <div className="services-header_heading"><h2>Services</h2></div>
            <p className="services-header_text"><span>At our digital marketing agency, we offer a range of services to </span><span>help businesses grow and succeed online. These services include:</span> </p>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                        <p>Learn more</p>
                      </div>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                        <p>Learn more</p>
                      </div>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./blackandwhitearrow.png" alt="arrow"/>
                        <p className="card_link_text_white">Learn more</p>
                      </div>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                        <p>Learn more</p>
                      </div>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./greenandblackarrow.png" alt="arrow"/>
                        <p>Learn more</p>
                      </div>
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
                      <div className="card_link">
                        <img className="card_arrow" src="./blackandwhitearrow.png" alt="arrow"/>
                        <p className="card_link_text_white">Learn more</p>
                      </div>
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
                <button className="proposal_button">Get your free proposal</button>
              </div>
              <div className="proposal-illustration">
                <img className="proposal-illustration_img" src="./stars.png" alt="" />
              </div>
            </div>
          </div>
          <article className="services-header">
            <div className="services-header_heading"><h2>Case Studies</h2></div>
            <p className="services-header_text">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
          </article>
          
        </main>
      </div>
      
    </div>
    </>
  )
}

export default App
