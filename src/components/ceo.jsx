

import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

const Ceo = () => {
    return (
        <section className='ceopro'>
            <Container>
                <Row className='  px-3 d-flex align-items-center pt-5 justify-content-center '>
                    <h3 className='fw-medium text-light text-center mb-3'>Meet the CEO </h3>

                    <Col lg={6} md={6} >
                        <div className='pb-5 '>


                            <h3 className='fw-bold text-light  '>Hon. (Dr.) Uriel A. Ezeh (CFIAR; PCF, CIPRMP) </h3>
                            <h5 className='fw-bold text-warning  '>CEO / UR9 GROUP </h5>
                            <div className='       mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
                            <p className="py-4 fw-normal text-light ">

                                <span className='' style={{ color: "gold" }}>Hon. Dr. Uriel A. Ezeh </span>  is the Founder and Group Chief Executive Officer of
                                UR9 GROUP. A multi-talented business tycoon, he has overseen the growth and
                                expansion of the UR9 brand into one of the foremost premium luxury brands in
                                the country. A graduate of Business and Management from the University of
                                Sunderland and a dual Master’s holder of Management and Leadership; Global
                                Management from the prestigious Regent’s Business School, London. The
                                Honourable Doctor Uriel has shown himself to be a serial entrepreneur with the
                                gift of discerning times and seasons; a gift from God he acknowledges as one of
                                the foundations of success of the UR9 Group . <br></br><br></br>

                                <span className='' style={{ color: "gold" }}>Hon. Dr. Uriel A. Ezeh </span> is an exemplary leader and a highly sociable figure within the
                                Nigerian business space who has been conferred with many titles and awards


                            </p>

                            <a href="/Aboutceo" className='btn-warning px-4 btn-custom  py-3 mx-2 my-5  rounded-3 text-decoration-none  transition duration-500 ease-in-out fw-bold ' >Read More</a>



                        </div>



                    </Col>




                    <Col lg={6} md={6}>


                        <div className=' d-flex align-items-center flex-column  justify-content-center  rounded-l '
                        >

                            <div className='bg-warning' style={{


                                borderTopRightRadius: "50px",

                            }}>


                                <img className=" bg-dark  me-2 mt-2  W-AUTO" src="/boss.png" alt="ceo" style={{ width: '400px', height: '400px', borderTopRightRadius: "50px", }} ></img>
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default Ceo;