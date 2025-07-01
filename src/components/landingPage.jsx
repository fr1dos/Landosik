// import { useState } from 'react'


function App() {


  return (
    <>
    <div className="landing-page">
      <header>
        <div className="navigation-bar">
          <div className="logo">
            <img className="positivus-logo" src="PositivusLogo.png" alt="Positivus"/>
          </div>
          <nav className="header-nav">
            <ul className="header-nav_list">
              <li className="header-nav_list__item">About us</li>
              <li className="header-nav_list__item">Services</li>
              <li className="header-nav_list__item">Use Cases</li>
              <li className="header-nav_list__item">Pricing</li>
              <li className="header-nav_list__item">Blog</li>
            </ul>
            <button className="header-button_request"><p>Request a quote</p></button>
          </nav>
        </div>
      </header>
    </div>
    </>
  )
}

export default App
