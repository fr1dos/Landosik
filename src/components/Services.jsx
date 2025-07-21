import React from "react";

const Services = () =>{
    return(
    <>
    <section className="heading-article">
        <div className="heading-article_heading"><h2>Services</h2></div>
        <p className="heading-article_text">At our digital marketing agency, we offer a range of services to <br />help businesses grow and succeed online. These services include: </p>
    </section>
    <section className="services">
        <div className="services-cards">
            <div className="card card_grey">
                <div className="card_text">
                    <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_lightgreen">Search engine</h3>
                    <h3 className="card_heading_h3 heading_background_lightgreen">optimization</h3>
                    </div>
                    <button className="card_link">
                        <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                        <p>Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                    <img className="card_illustration_img card_illustration_magnifyingglass" src="card-illustration-magnifying_glass.svg" alt="" />
                </div>
            </div>
            <div className="card card_lightgreen">
                <div className="card_text">
                <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_white">Pay-per-click</h3>
                    <h3 className="card_heading_h3 heading_background_white">advertising</h3>
                </div>
                    <button className="card_link">
                    <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                    <p>Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                <img className="card_illustration_img card_illustration_windowarrow" src="card-illustration-window_arrow.svg" alt="" />
                </div>
            </div>
            <div className="card card_darkblue">
                <div className="card_text">
                <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_white">Social Media</h3>
                    <h3 className="card_heading_h3 heading_background_white">Markreting</h3>
                </div>
                    <button className="card_link">
                    <img className="card_arrow" src="./service-arrow-black.svg" alt="arrow"/>
                    <p className="card_link_text_white">Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                <img className="card_illustration_img card_illustration_windowsmile" src="card-illustration-window_smile.png" alt="" />
                </div>
            </div>
            <div className="card card_grey">
                <div className="card_text">
                <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_lightgreen">Email</h3>
                    <h3 className="card_heading_h3 heading_background_lightgreen">Marketing</h3>
                </div>
                    <button className="card_link">
                    <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                    <p>Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                <img className="card_illustration_img card_illustration_blackholes" src="card-illustration-blackholes.png" alt="" />
                </div>
            </div>
            <div className="card card_lightgreen">
                <div className="card_text">
                <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_white">Content</h3>
                    <h3 className="card_heading_h3 heading_background_white">Creation</h3>
                </div>
                    <button className="card_link">
                    <img className="card_arrow" src="./service-arrow-green.svg" alt="arrow"/>
                    <p>Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                <img className="card_illustration_img card_illustration_windows" src="card-illustration-windows.png" alt="" />
                </div>
            </div>
            <div className="card card_darkblue">
                <div className="card_text">
                <div className="card_heading">
                    <h3 className="card_heading_h3 heading_background_lightgreen">Analytics and</h3>
                    <h3 className="card_heading_h3 heading_background_lightgreen">Tracking</h3>
                </div>
                    <button className="card_link">
                    <img className="card_arrow" src="./service-arrow-black.svg" alt="arrow"/>
                    <p className="card_link_text_white">Learn more</p>
                    </button>
                </div>
                <div className="card_illustration">
                <img className="card_illustration_img card_illustration_diagrams" src="card-illustration-diagrams.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Services