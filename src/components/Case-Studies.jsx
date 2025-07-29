import React from "react";
import {Cell} from "./Case-Studies-Cell.jsx"

const CaseStudies = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Case Studies</h2></div>
          <p className="heading-article_text">Explore Real-Life Examples of Our Proven Digital Marketing <br />Success through Our Case Studies</p>
        </section>
        <section className="case-studies">
          <Cell></Cell>
        </section>
      </>
    )
}

export default CaseStudies