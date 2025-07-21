import React from "react";

const WorkingProcces = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Our Working Process </h2></div>
          <p className="heading-article_text">Step-by-Step Guide to Achieving<br />Your Business Goals</p>
        </section>
        <section>
            <div className="working-process first-working-process">
              <div className="working-process-cell-header">
                <h6>01</h6>
                <h3>Consultation</h3>
                <img className="" src="./working-process-minus-icon.svg" alt="" />
              </div>
              <hr />
              <div className="working-process-cell-text">
                <p><span>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing </span><span> efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</span></p>
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>02</h6>
                <h3>Research and Strategy Development</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>03</h6>
                <h3>Implementation</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>04</h6>
                <h3>Monitoring and Optimization</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>05</h6>
                <h3>Reporting and Communication</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
            <div className="working-process">
              <div className="working-process-cell-header">
                <h6>06</h6>
                <h3>Continual Improvement</h3>
                  <img className="" src="./working-process-plus-icon.svg" alt="" />
              </div>
            </div>
        </section>
      </>
    )
}

export default WorkingProcces