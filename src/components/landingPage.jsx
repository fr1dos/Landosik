// import { useState } from 'react'


function App() {


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
      </div>
      
    </div>
    </>
  )
}

export default App
