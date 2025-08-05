import React from "react";
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Contact Us</h2></div>
          <p className="heading-article_text">Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs</p>
        </section>
        <section className="contact">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="contact-from-radio-buttons">
                <div className="radio">
                  <input id="radio-1" name="radio" htmlFor="radio-1" {...register("RadioChoice")} type="radio" value="Say Hi" />
                  <label htmlFor="radio-1" className="radio-label">Say Hi</label>
                </div>
                <div className="radio">
                  <input name="radio" id="radio-2" {...register("RadioChoice")} type="radio" value="Get a Quote" />
                  <label htmlFor="radio-2" className="radio-label">Get a Quote</label>
                </div>
              </div>
              <div className="contact-form-fields">
                <div className="contact-form-label-container">
                  <label htmlFor="username">Name</label> 
                  <input type="text" className="contact-field_input" placeholder="Name" {...register("Name", {maxLength: 80})} />
                </div>
                <div className="contact-form-label-container">
                  <label htmlFor="email">Email*</label> 
                  <input type="email" className="contact-field_input" placeholder="Email*" {...register("Email*", {required: true, maxLength: 100})} />
                </div>
                <div className="contact-form-label-container">
                  <label htmlFor="message">Message*</label> 
                  <input type="text" placeholder="Message*" className="contact-field_input contact-fied_input_message" {...register("Message*", {required: true, maxLength: 500})} />
                </div>
              </div>
              <input type="submit" className="contact-form_button" value="Send Message"></input>
            </form>
            <div className="contact-illustration">
              <img src="./contact-stars.svg" alt="" />
            </div>
        </section>
      </>
    )
}

export default ContactUs