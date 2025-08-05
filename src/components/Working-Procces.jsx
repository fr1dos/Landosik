import {Cell} from './Working-Procces-Cell.jsx'


const WorkingProcces = () => {
  const isMedia = window.innerWidth < 575;
    return(
      <>
        <section className="heading-article">
          <div className="heading-article_heading heading-article_heading_wp">
            {isMedia && (
              <>
                <h2>Our Working </h2> <h2>Process</h2>
              </>
            )}
            {!isMedia &&(
              <h2>Our Working Process</h2>
            )}
          </div>
          <p className="heading-article_text">Step-by-Step Guide to Achieving<br />Your Business Goals</p>
        </section>
        <section className="working-procees-container">
          <Cell></Cell>
        </section>
      </>
    )
}

export default WorkingProcces