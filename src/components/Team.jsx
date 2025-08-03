import React from "react";
import { TeamMembers } from "./Team-Cell";


const Team = () => {
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading"><h2>Team </h2></div>
          <p className="heading-article_text">Meet the skilled and experienced team behind our <br />successful digital marketing strategies</p>
        </section>
        <section className="team">
            <div className="teammates-gap">
              <TeamMembers />
            </div>
            <button className="team_button">See all team</button>
        </section>
      </>
    )
}

export default Team