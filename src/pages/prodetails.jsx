import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Projectlisting from "../components/Project-listing";
import { useState } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { BiArea, BiBed, BiBuildingHouse } from "react-icons/bi";

const BlogDetails = () => {

    // return items by id (single items)
    const { id } = useParams();
    const property = Projectlisting.find(property => {
        return property.id === parseInt(id)
    })
    const [slideimage, setSlideimage] = useState(property.pics[0])
    const handleClick = (i) => {
        const currentI = property.pics[i]
        setSlideimage(currentI)
    }

    return (

        <div className="Blogs   " style={{ hover: 'black', backgroundColor: '#DADDE4' }}>
            < section id='Prop-listings ' className='Poperty mt-5  '  >
                <div className="logo-sec ">
                    <div className="mid  d-flex flex-column  py-5 align-items-center">

                        <img src={property.Logo} alt="logo" className="w-25"></img>
                        <h5 className="text-light pt-2">{property.Residence}</h5>
                        <p className="P-text pt-2 text-warning">{property.Address}</p>
                    </div>

                </div>

                <Container>
                    <h4 className="text-center text-light display-6 fw-bold pt-5 pb-4">Property details</h4>


                    <Row className="poper  px-2 bg-light d-flex  ">



                        <Col lg={7} md={6} s

                            className='dred   gx-2  ' >


                            <div className='proj-it mt-1 bg-light ' >
                                <div className="BUTTON bg-light fw-bold position-absolute mt-0 p-2 fs-6" >{property.Price}</div>

                                <img className="project-im " src={slideimage} alt="house"></img>

                                <div className="p-3  d-flex justify-content-left flex-row">
                                    <p className="px-2  p-text ">{property.Features3} <BiBed className="px-1 fs-3" /> <FaSwimmingPool className="px-1 fs-3" /> <BiBuildingHouse className="px-1 fs-3" /></p>
                                    <p className="px-2 p-text "> <BiArea /> {property.Area}<sup>2</sup></p>


                                </div>
                            </div>
                        </Col>

                        <Col lg={5} className="  ">
                            <div className='view  bg-light '>
                                <h4 className=" text-left pt-2 px-4  ">Details</h4>
                                <p className="prop-text ps-4  text-justify ">{property.Features2}</p>
                                <p className=" P-text px-2  text-dark text-center position-relative fs-6 " style={{ fontSize: '14px' }}></p>

                                <Row className=" row-cols-4 mx-4 gap-2 " >

                                    {
                                        property.pics.map((pic, i) => {
                                            return (
                                                < div className=" d-flex items-center justify-content-center col-lg-3 col-sm-4" key={pic.i} >

                                                    <img src={pic} className=" px-1 " style={{ width: "100px", height: "50px" }} alt="picos" onMouseEnter={() => handleClick(i)}></img>
                                                </div>


                                            )
                                        }

                                        )
                                    }
                                </Row>
                            </div>



                            <button class="btn btn-warning fw-bold my-4 mx-4 d-flex  p-2 text-dark fs-6"  > <Link to="/Project" className="text-decoration-none text-dark">Back to Listings</Link> </button>

                        </Col>

                    </Row>



                </Container>

            </section>



        </div>


    );
}

export default BlogDetails;