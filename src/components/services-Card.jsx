import { servicesRendering } from "./services-Data.jsx";

export function Card() {
    const cardItems = servicesRendering.map(element =>
        <div key={element.id} className= {element.cardBackGround}>
            <div className="card_text">
                <div className="card_heading">
                <h3 className={element.headingColor}>{element.topText}</h3>
                <h3 className={element.headingColor}>{element.bottomText}</h3>
                </div>
                <button className="card_link">
                    <img className="card_arrow" src={element.arrowColor} alt="arrow"/>
                    <p className={element.paragraphColor}>Learn more</p>
                </button>
            </div>
            <div className="card_illustration">
                <img className="card_illustration_img" src={element.imgSrc} alt="" />
            </div>
        </div>
    )

    return(
        <>
            <div className="services-cards">
                {cardItems}
            </div>
        </>
    )
}