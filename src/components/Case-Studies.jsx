import React from "react";

const CaseStudies = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Case Studies</h2></div>
          <p className="heading-article_text">Explore Real-Life Examples of Our Proven Digital Marketing <br />Success through Our Case Studies</p>
        </section>
        <section className="case-studies">
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
            <hr className="vertical-line" />
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
            <div className="vertical-line"></div>
            <div className="case-studies-cell">
              <p className="case-studies-cell-text">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
              <button className="case-studies-cell-link">
                <a className="case-studies-cell-link-text" href="">Learn more</a>
                <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
              </button>
            </div>
        </section>
      </>
    )
}

export default CaseStudies