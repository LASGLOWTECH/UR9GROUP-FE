
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React from 'react';

import Profeatures from "../components/Profeatures";
import Projectlisting from "../components/Project-listing";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);


    return (
        <>
        <Helmet>
        <title>Our Projects</title>
       
        <meta name="description" content="Want to Buy or Sell ? We are the fastest way to your new home and investments." />
        <link rel="canonical" href="/Project" />
     
      </Helmet>

        <div className=" properties-section " style={{ backgroundColor: '#DADDE4' }}>

            <section className="" id="Project-Hero">
                <Container>

                    <Row className=" mx-auto mt-5 pt-2 "  >

                        <Col lg={7}   className="mt-5 pt-5   px-4 " data-aos="slide-right">

                            <div className="gold2 mx-4 w-auto mt-7">
                             <h6 className="one   fw-bold py-1 px-4 text-left">Luxury and Contemporary Green  Homes</h6>
                            </div>
                       
               
                            <h3 className="display-7  pt-4 ms-4 fw-bolder 
                    mt-1 lh-sm text-justify  text-warning"  ><span className=" Uriel  text-light ">Discover Most Suitable Properties</span> </h3>

            

                            <p className=" mx-4 pt-3 text-wrap  text-light font-normal P-text "  ><span className="    text-warning ">Want</span> to Buy or <span className=" text-warning "> Sell ?</span>. We are the fastest way to your new home and investments.</p>

                            <button class=" mb-2 mt-3 fs-5 fw-bold rounded-2 btn btn-warning ms-4  fw-bold"><a className="text-decoration-none text-dark fw-bold" href="/Contact" target="_blank"> Talk to us </a></button>

                        </Col>


                        

                    </Row>



                </Container>

            </section>



            {/* project listing secttion */}








            < section id='Prop-listings ' className='Poperty mt-5  '  >





                <Container>


                    <div className='listing-title mt-4 mx-2 text-dark'>

                        <h3 className="text-center display-6 fw-bold">Top Featured Listings</h3>
                        <p className='text-center P-text text-wrap mt-3 text-dark  fs-6'>Selected listings by Location and Residence</p>
                    </div>

                    <Profeatures Projectlisting={Projectlisting} />

                </Container>

            </section>

        </div>
        </>
    );
}

export default Projects;