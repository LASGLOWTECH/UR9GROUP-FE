import { useState } from "react";
// import{FiPhoneCall} from 'react-icons/Fi'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
// import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import GoogleMap from "../components/Googlemap";
const ContactUs = () => {



    const form = useRef();
    const [loading, setIsloading] = useState(false)
    const [result, setResult] = useState("")
    const sendEmail = (e) => {

        e.preventDefault();

        setIsloading(true);

        emailjs.sendForm('service_2pjr0pp', 'template_auvelsq', form.current, 'VCytcEaBVLmjN2Q1q')

            .then((result) => {


                setIsloading(false);
                setTimeout(() => {
                    setResult("Thanks for Contacting us")


                }, (1000))

            }, (error) => {
                console.log(error.text);
                setTimeout(() => { setResult("Unable to send ") }, 1000);
                setIsloading(false);


            });
        e.target.reset()

    };



    return (<>
    <Helmet>
        <title>Contact Us</title>
       
        <meta name="description" content="We would love to hear from you on any of our properties" />
        <link rel="canonical" href="/Contact" />
     
      </Helmet>
                    
    <div className=" d-flex align-items-center justify-content-base h-sec py-5  " style={{ backgroundImage: "url(/Sardinal1.jpg)", backgroundRepeat: "no-repeat", height: "100vh", backgroundSize: "cover" }}  >
                <Container className='px-4'>
                   
                    <div className="contents mt-5  d-flex align-items-center justify-content-base ">
                        <div className="">
                            <h1 className=" Hero-text  fw-bolder pt-1 text-white display-5    text-uppercase">CONTACT </h1>
                            <p className=" P-text   mt-3 text-light  fs-5"> We would love to hear from you on any of our properties  </p>
                            <div className='    rounded-5    -mt-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>


                            {/* <button id="batton" class=" rounded-3 p-2 mt-3  fw-normal mb-3"><a className=" hero-i  fs-5  " style={{ textDecoration: 'none', color: '' }} href="/About" target="_blank">Explore</a></button> */}

                        </div>

                    </div>

                </Container>

            </div>
     <div className="Contact-hero"  >
            <div className="container py-5 ">
                <Row className="py-5">
                    <Col lg={6} >

                        <div className="contact-sec d-flex flex-column mt-5 pt-4 mx-4">
                            <div className="item-1 d-flex justify-content-start py-2 pe-3">
                                <div className="ico-items bg-warning mt-2 d-flex align-items-center justify-content-center " style={{ width: "30px", borderRadius: "50%", height: "30px" }}>
                                    <i class=" text-dark fa fa-map-marker aria-hidden=true"></i>
                                </div>

                                <div className="item-info ps-3">
                                    <h4 className=" fs-5 text-warning">Address</h4>
                                    <p className="py-1 text-white">4, Ajose Adeogun Strt, Utako Abuja</p>
                                </div>
                            </div>
    


                            <div className="item-1 d-flex justify-content-start py-3 pe-3">
                                <div className="ico-items bg-warning mt-2 d-flex align-items-center justify-content-center " style={{ width: "30px", borderRadius: "50%", height: "30px" }}>
                                    <i class="text-dark fa fa-phone aria-hidden=true"></i>
                                
                                
                                </div>

                                <div className="item-info ps-3">
                                    <h4 className="pt-1 fs-5 text-warning">Phone</h4>
                                    <p className=" text-white">+234 817-147-6946</p>
                                </div>
                            </div>



                            <div className="item-1 d-flex justify-content-start py-3  pe-3">
                                <div className="ico-items bg-warning mt-2 d-flex align-items-center justify-content-center " style={{ width: "30px", borderRadius: "50%", height: "30px" }}>
                                    <i class="text-dark fa fa-envelope aria-hidden=true"></i>
                            </div>

                            <div className="item-info ps-3">
                                <h4 className="pt-1 fs-5 text-warning">Email</h4>
                                <p className=" text-white">info@ur9group.com</p>
                            </div>
                        </div>
                    </div>






                </Col>

                <Col lg={6}>


                    <form className="  mx-4 px-3 my-5 bg-light " ref={form} onSubmit={sendEmail}>
                        < h3 className=" fw-bold fs-5 mt-5 py-3 text-dark welcome">Send Message</h3>
                        <p className=" fw-normal fs-6 text-danger">{result} </p>

                        <div className="form-group">
                            <label for="exampleFormControlInput"></label>
                            <input type="text "
                                className="form-control P-text fw-normal"
                                id="exampleFormControlInput1"
                                name="user_name"
                                placeholder="Name"

                            ></input></div>

                        <div className="form-group">
                            <label for="exampleFormControlInput"></label>
                            <input type="Email"
                                className="form-control P-text"
                                id="exampleFormControlInput1"
                                name="user_email"
                                required placeholder="Email"

                            ></input></div>



                        <div className="form-group ">
                            <label for="exampleFormControlInput"></label>
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea className="form-control P-text" name="message" id="exampleFormControlInput1" placeholder="Message" cols=""
                                rows="3"></textarea></div>

                        <div className="form-group">
                            {!loading && <input type="submit" className="  fs-5  rounded-2 px-2 sub-btn my-3 bg-warning text-black" value="Send" />}
                            {loading && <input type="submit" className=" px-2 fs-5  sub-btn my-4 bg-success  text-light" disabled value="Sending" />}
                        </div>


                    </form>

                    

                </Col>
              
            </Row>
<div className="container">


<h2 className='text-center rounded-3 py-2 mt-5 mx-auto fw-bold  w-75 text-light '>Locate us on the map</h2>
</div>
           <GoogleMap/>
          
        </div>

        </div >
    
    
    
    </>
       
    );
};
export default ContactUs;