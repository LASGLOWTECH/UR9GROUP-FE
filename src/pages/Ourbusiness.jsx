import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Servicelist from "../components/Services";
import { Helmet } from "react-helmet-async";

const Services = () => {

    return (

        <>
        <Helmet>
        <title>Our Businesses</title>
       
        <meta name="description" content="We are your one-stop destination for premium homes, exquisite vodka, and sustainable construction. Our core values help us to provide our clients with the best possible experience" />
        <link rel="canonical" href="/ourbusiness" />
     
      </Helmet>
        <div className="name py-5 ">



            <div className="  h-sec py-5  " style={{ backgroundImage: "url(/Marsh3.jpg)", backgroundRepeat: "no repeat", height: "80vh", backgroundSize: "cover" }}  >
                <Container className='px-4'>
                   
                    <div className="contents mt-5  py-5">
                        <div className="mt-5  d-flex flex-column align-items-center justify-content-center ">
                            <h1 className=" Hero-text  fw-bolder pt-8 text-white display-6   text-uppercase">Our <span className="text-warning">Businesses </span>  </h1>
                            <p className="     text-light  fs-5">  Portfolio across various sectors</p>

                            <div className='    rounded-5    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
               


                        </div>

                    </div>

                </Container>

            </div>

            <Container>
<div className="d-flex flex-column mt-5 align-items-center justify-content-center">
                <h2 className=' one fs-2 text-uppercase pt-5 fw-bolder textcenter  text-center'>Our businesses span across various  sectors.</h2>
                <div className='    rounded-5    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
              
                </div>
                <Row>


                    {Servicelist.map((services, index) => {
                        return (
                            <Col lg={6} key={index}>
                                <div className="header bg-dark  h-auto" style={{ height: "" }}>
                                    <div className="d-flex  py-3 px-4 flex-row justify-content-start align-items-center " style={{ backgroundColor: "" }}>
                                        <img src={services.symbol} className='' alt='ur9 ' style={{ width: "50px" }}></img>
                                        <h5 className="  px-3 P-text fw-bold text-white font-bold  ">
                                            {services.Headertext} </h5></div>
                                    <img src={services.sectionimg} className='w-100' alt='ur9 ' style={{ height: "inherit" }}></img>

                                    <h3 className=' one pt-5  px-3 display-7 text-light text-left '>{services.info}</h3>
                                    <div className='    rounded-5 mx-3   mb-2 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>





                                    <p className="p-3 P-text text-light ">{services.Textinfo}</p>


                                </div>
                            </Col>
                        )
                    })}

                </Row>

            </Container>

        </div>
        </>
    )
}


export default Services