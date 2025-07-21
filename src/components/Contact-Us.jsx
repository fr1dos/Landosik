import React from "react";

const ContactUs = () => {
    return(
      <>
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
      </>
    )
}

export default ContactUs