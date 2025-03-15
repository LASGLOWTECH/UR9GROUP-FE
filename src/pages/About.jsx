// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Values from "../components/values";
import { Helmet } from 'react-helmet-async';
// import { BsFillKeyFill } from "react-icons/bs";


const About = () => {
    const [readMore, setReadmore] = useState(false)
    const extraContent = <p className="text-light">
        Our clients know that <span className=" text-warning fw-bolder">‘A DEAL WITH UR9 IS A DEAL WITH EXCELLENCE’</span>.
        Our corporate strategy has evolved as our businesses have grown, matured and
        diversified into new sectors and regions. This has set the stage for the next phase
        in our strategic plan(s) for the next decade; Expansion and Backward
        Integration.
        We are striving for self-reliance in all the sectors of our operations and have
        drawn up ambitious plans to establish world-class projects in new realms such as
        Airline, Railway, Motorsports, Entertainment, Technology and
        Telecommunications whilst re-investing and upgrading in our current sectors of
        operations to meet International Standards of Excellence; the key principle of our
        business model which is <span className="text-warning fw-bolder">‘DRIVEN BY EXCELLENCE’</span> .
    </p>
    const linkName = readMore ? 'Read Less <<' : 'Read more...'
    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);

    return (
<>
<Helmet>
        <title>About Us</title>
        <meta name="description" content="UR9 GROUP is a diversified and fully integrated conglomerate registered with the Corporate Affairs Commission and under the laws of The Federal Republic of Nigeria." />
        <link rel="canonical" href="/About" />
      
      </Helmet>
        
        
        <div className=" About-sec" style={{ backgroundColor: '' }} >






<div className=" d-flex align-items-center justify-content-base h-sec py-5  " style={{ backgroundImage: "url(/Bali1.jpg)", backgroundRepeat: "no-repeat", height: "100vh", backgroundSize: "cover" }}  >
                <Container className='px-4'>
                   
                    <div className="contents mt-5  d-flex align-items-baseline justify-content-start ">
                        <div className="">
                            <h1 className=" Hero-text text-warning  fw-bolder pt-1 text-warning display-5    text-uppercase">UR9 GROUP </h1>
                            <p className=" P-text   mt-3 text-light  fs-5"> The Epitome of Luxury and Sophistication   </p>
                            <div className='    rounded-5    -mt-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>


                            {/* <button id="batton" class=" rounded-3 p-2 mt-3  fw-normal mb-3"><a className=" hero-i  fs-5  " style={{ textDecoration: 'none', color: '' }} href="/About" target="_blank">Explore</a></button> */}

                        </div>

                    </div>

                </Container>

            </div>









            <div className=" bg-dark ps-4  pt-5 About-section">

                <div className="pt-5">
                    <div className="About-hero  mt-2 mx-4" data-aos="zoom-in-up" >

                        <h3 className="text-warning display-7 fw-bold" >ABOUT US</h3>
                        <p className=" text-break lh-lg fw-light text-left display-7 pb-4  text-light pt-3" ><span className="text-warning fw-bolder">UR9 GROUP</span> is a diversified and fully integrated conglomerate registered with
                            the Corporate Affairs Commission and under the laws of The Federal Republic of
                            Nigeria in May 2018.
                            We have vibrant operations in Nigeria across a wide range of sectors including
                            Energy, Beverage, Real Estate, Agriculture, Technologies, Entertainment,
                            Transportation and Asset Management. Our main business focus is to provide
                            value-added products and services that are centered on Luxury, Elegance,
                            Quality and Excellence; attributes for which we are known in our industries of
                            operation.
                            We place great emphasis on Integrity, Knowledge, Partnership, Customer
                            Service Extraordinaire, Competence and Quality in all our business dealings. We
                            endeavor to find the best fit for the needs and desires of our clients as well as
                            boosting their personality and lifestyle.

                            <p className=" text-warning  text-decoration-none readmore" onClick={() => { setReadmore(!readMore) }}> {linkName}</p>


                            {readMore && extraContent}

                        </p>

                    </div>



                </div>


                
                <Row className="py-6 px-4"   style={{backgroundColor:"#"}}>
    
    <Col lg={6}  className="  " >
                        <div className="   bg-dark text-left vision-section" data-aos="zoom-in-up">
                        <h3 className="one text-light pb display-7 pt-4 text-left">Our  Mission</h3>
                <div className='    rounded-5    ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
    

                            <div className="text-warning misicons "><i className=" py-3 fa fa-bullseye"></i></div>
                            <p className="py-3 P-text  " style={{ color: '#DADDE4' }}>To provide consumers with high quality products and services
                                across various industrial spectrums utilizing the Total Quality Management
                                (TQM) model. </p>
                        </div>
                        </Col>
    
                        <Col lg={6}  className="  " >
                        <div className="   bg-dark  text-left vision-section" data-aos="zoom-in-up">
                        <h3 className="one text-light pb display-7 pt-4 text-left">Our  Vision</h3>
                <div className='    rounded-5    m' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
    

                            <div className="text-warning misicons "><i className=" py-6 mt-6 fa fa-eye"></i></div>
                            <p className="py-3 P-text  " style={{ color: '#DADDE4' }}>To become one of the leading brands in our industries of operation. We aim to be everyone's

first choice in our operational fields by meeting and exceeding their expectations through the utilization of best
business practices which will in turn drive URY's long term growth and success.</p>
                        </div>
                        </Col>
    </Row>
   

            </div>











            <section className=" pt-3 pb-5 "   style={{ width: "", backgroundColor: "#DADDE4" }}>
           



                <Container>
                <h3 className="one pt-5 pb display-7 text-left">Our Corperate Values</h3>
                <div className='    rounded-5    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
    

<Row>
    
        {Values.map((values, index)=>{
        
            return(
                <Col lg={4} key={index} className="my-1 ">
<div className="  bg-dark px-4  rounded-s-3 text-left border-b-warning vision-section" data-aos="fade-out" >
                     
                     
                     < div className="d-flex flex-row align-items-center justify-content-start ">

                     <img src={values.symbol} alt="index" className="p-1 rounded-circle bg-light" style={{width:"50px"}}/>
                     <p className="P-text text-light pb display-7 py-3 px-3 text-left">{values.info}</p>
                       
                     </div>
               

                       
                       </div>
 
                       </Col>
            )
        })}
   
</Row>





                        





                </Container>

            </section>









            <section />


        </div>
        </>)
        
        ;
}

export default About;




