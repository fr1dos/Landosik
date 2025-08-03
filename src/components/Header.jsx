import React from "react";
import {LogoList} from './Header-Logotypes'
const Header = () => {
    const isMobile = window.innerWidth <= 575;

    return(
        <header>
            <div className="navigation-bar">
            <div className="logo">
                <img className="positivus-logo" src="header-black-positivus-logo.svg" alt="Positivus"/>
            </div>
            {isMobile && (
                <nav className="navigation-bar_nav main-nav hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="navigation-bar_nav_list menu__box">
                        <li className="navigation-bar_nav_list__item"><a className="menu__item" href="#">About us</a></li>
                        <li className="navigation-bar_nav_list__item"><a className="menu__item" href="#">Services</a></li>
                        <li className="navigation-bar_nav_list__item"><a className="menu__item" href="#">Use Cases</a></li>
                        <li className="navigation-bar_nav_list__item"><a className="menu__item" href="#">Pricing</a></li>
                        <li className="navigation-bar_nav_list__item"><a className="menu__item" href="#">Blog</a></li>
                    </ul>
                </nav>
            )}
            {!isMobile && (
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
            )}
            </div>
            <div className="header-main">
            <div className="header-main_text">
                <h1 className="header-main_text_h1">Navigating the <br /> digital landscape <br />for success</h1>
                {isMobile && (
                    <div className="header-main_img">
                    <img className="gramophone" src="./header-main-gramophone.png" alt="gramophone" />
                    </div>
                )}
                <p className="header-main_text_p">Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br /> services including SEO, PPC, social media marketing, <br /> and content creation.</p>
                <button className="header-main_consultation">Book a consultation</button>
            </div>
            <div className="header-main_img">
                {!isMobile && (
                <div className="header-main_img">
                    <img className="gramophone" src="./header-main-gramophone.png" alt="gramophone" />
                </div>
                )}
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