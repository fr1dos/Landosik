import React from "react";

const Proposal = () => {
    return(
    <div className="proposal">
        <div className="proposal-text">
            <h3 className="proposal_h3">Let’s make things happen</h3>
            <p className="proposal_p">Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online.</p>
            <button className="proposal_button">Get your free proposal</button>
        </div>
        <div className="proposal-illustration">
            <img className="proposal-illustration_img" src="./proposal-illustration-stars.svg" alt="" />
        </div>
    </div>
    )
}

export default Proposal