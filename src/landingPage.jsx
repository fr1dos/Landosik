// import { useState } from 'react'

import CaseStudies from "./components/Case-Studies"
import ContactUs from "./components/Contact-Us"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Proposal from "./components/Proposal"
import Services from "./components/Services"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import WorkingProcces from "./components/Working-Procces"

function App() {

  return (
    <div className="landing-page">
      <div className="landing-page_padding">
        <Header />
        <main>
          <Services />
          <Proposal />
          <CaseStudies />
          <WorkingProcces />
          <Team />
          <Testimonials />
          <ContactUs />
        </main>
        <Footer />
      </div>
      
    </div>
  )
}

export default App
