import {Card} from "./Services-Card.jsx"
const Services = () =>{
    return(
    <>
    <section className="heading-article">
        <div className="heading-article_heading"><h2>Services</h2></div>
        <p className="heading-article_text">At our digital marketing agency, we offer a range of services to <br />help businesses grow and succeed online. These services include: </p>
    </section>
    <section className="services">
        <Card></Card>
    </section>
    </>
    )
}

export default Services