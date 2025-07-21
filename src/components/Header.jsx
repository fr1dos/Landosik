import React from "react";

const Header = () => {
    return(
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
    )
}

export default Header;