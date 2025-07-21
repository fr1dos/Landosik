import React from "react";

const Team = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Team </h2></div>
          <p className="heading-article_text">Meet the skilled and experienced team behind our <br />successful digital marketing strategies</p>
        </section>
        <section className="team">
            <div className="teammates-gap">
            <div className="teammates-cell">
              <div className="teammates-cell-person">
                <img className="teammates-cell-person_flowerface" src="./team-john-smit.png" alt="" />
                <div className="teammates-cell-person_text">
                  <h4>John Smith</h4>
                  <p>CEO and Founder</p>
                </div>
                <img className="linkedin" src="./team-linkedin.svg" alt="" />
              </div>
                <hr />
              <p className="teammates-cell-text">10+ years of experience in digital <br /> marketing. Expertise in SEO, PPC, <br /> and content strategy</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-jane-doe.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Jane Doe</h4>
                    <p>Director of Operations</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">7+ years of experience in project <br /> management and team leadership. <br /> Strong organizational and <br /> communication skills</p>
              </div><div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-michael-brown.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Michael Brown</h4>
                    <p>Senior SEO Specialist</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">5+ years of experience in SEO and <br /> content creation. Proficient in <br /> keyword research and on-page <br /> optimization</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-emily-johnson.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Emily Johnson</h4>
                    <p>PPC Manager</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">3+ years of experience in paid <br /> search advertising. Skilled in <br /> campaign management and <br /> performance analysis</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-brian-williams.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Brian Williams</h4>
                    <p>Social Media <br /> Specialist</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">4+ years of experience in social <br /> media marketing. Proficient in <br /> creating and scheduling content, <br /> analyzing metrics, and building <br /> engagement</p>
              </div>
              <div className="teammates-cell">
                <div className="teammates-cell-person">
                  <img className="teammates-cell-person_flowerface" src="./team-sarah-kim.png" alt="" />
                  <div className="teammates-cell-person_text">
                    <h4>Sarah Kim</h4>
                    <p>Content Creator</p>
                  </div>
                  <img className="linkedin" src="./team-linkedin.svg" alt="" />
                </div>
                <hr />
                <p className="teammates-cell-text">2+ years of experience in writing <br /> and editing <br />Skilled in creating compelling, SEO- <br /> optimized content for various <br /> industries</p>
              </div>
            </div>
            <button className="team_button">See all team</button>
        </section>
      </>
    )
}

export default Team