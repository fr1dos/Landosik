import React from "react";
import {LogoList} from './Header-Logotypes'
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
            <div className="marquee-container">
                <div className="logotypes marquee-track marquee-left">
                    <LogoList />
                    <LogoList />
                </div>
            </div>
        </header>
    )
}

export default Header;