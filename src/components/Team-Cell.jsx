import {Person} from "./Team-Data"

export function TeamMembers() {
  return(
    Person.map((member, index) => (
    <div className="teammates-cell" key={index}>
      <div className="teammates-cell-person">
        <img className="teammates-cell-person_flowerface" src={member.face} alt="face" />
        <div className="teammates-cell-person_text">
          <h4>{member.name}</h4>
          <p>{member.specialization}</p>
        </div>
        <img className="linkedin" src="./team-linkedin.svg" alt="" />
      </div>
        <hr />
        <p
          className="teammates-cell-text"
          dangerouslySetInnerHTML={{ __html: member.description }}
        ></p>
    </div>
  )))
}