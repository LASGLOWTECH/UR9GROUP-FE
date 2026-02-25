
import { useState } from "react";
// import { BsFacebook } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';
const Footer = () => {

    const today = new Date().getFullYear();
    const [newDay] = useState(today)
    return (
        <div className="   text-white footer-section">


            <div className="row " >


                {/* flex items */}
                <div className="row mx-2 pt-5" >
                    <div className="col-lg-3 col-md-6 pt-4 px-5 d-flex flex-column  align-items-start  col-md-6 ">
                        <img className="   w-25 h-auto img1" src="/hem.png" alt="hem" />
                        <p className=" lh-lg P-text pt-3">Delivering top-tier products and<br /> unwavering excellence. </p>
                    </div>

                    <div className="col-lg-3  col-md-6 pt-4 px-5" >
                        <h3 className="text-warning fs-4 ">Our services</h3>
                        <Nav.Link href="/Ourbusiness" className="foot-link"> <p className="text-light  ">Liquor</p></Nav.Link>


                        <Nav.Link href="/Project" className="foot-link"> <p className="text-light  ">Real Estate</p></Nav.Link>

                        <Nav.Link href="/Ourbusiness" className="foot-link"> <p className="text-light  ">Agriculture</p></Nav.Link>
                        <Nav.Link href="/Ourbusiness" className="foot-link"> <p className="text-light  ">Construction</p></Nav.Link>
                        <Nav.Link href="/ur9lin" className=" foot-lin"><p className="text-light foot-link ">Leaders Insight Network</p></Nav.Link>
                        <Nav.Link href="https://ur9group.com/lfh/" className=" foot-lin"><p className="text-light foot-link ">Luxury Fashion House</p></Nav.Link>





                    </div>

                    <div className="col-lg-3 col-md-6 pt-4 px-5">
                        <h3 className="text-warning fs-4 ">The company</h3>


                        <Nav.Link href="/About" className="foot-lin"> <p className="text-light  ">About</p></Nav.Link>
                        <Nav.Link href="/Contact" className="foot-lin"><p className="text-light foot-link ">Contact</p></Nav.Link>
                        <Nav.Link href="/Team" className="foot-lin"> <p className="text-light  foot-link">Team</p></Nav.Link>
                        <Nav.Link href="/Project" className="foot-lin"><p className="text-light  foot-link">Properties</p></Nav.Link>
                        <Nav.Link href="/privacypols" className=" foot-lin"><p className="text-light foot-link ">Privacy  Policy</p></Nav.Link>
                        <Nav.Link href="/ethics" className=" foot-lin"><p className="text-light foot-link ">Ethics</p></Nav.Link>

                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-6 pt-4 px-5   ">

                        <h3 className="text-warning fs-4 ">Contact Info</h3>

                        <div className="d-flex flex-row justify-content-start ">
                            <span className="span "><i class=" text-warning fa fa-map-marker aria-hidden=true"></i></span>

                            <p className="text-light px-2">4, Ajose Adeogun Street, Utako Abuja</p>

                        </div>
                        <div className="d-flex flex-row justify-content-start ">
                            <span className="span"><i class="text-warning fa fa-phone aria-hidden=true"></i></span>

                            <p className="text-light px-2 ">07012025252</p>



                        </div>

                        <div className="d-flex flex-row justify-content-start ">
                            <span className="span"><i class="text-warning fa fa-envelope aria-hidden=true"></i></span>

                            <p className="text-light px-2 ">ur9groupltd@gmail.com</p>


                        </div>



                    </div>
                </div>
                {/* end of flex items  */}






                {/* icons-section */}
                <div className="row pt-5">


                    <p className="fw-lighter  text-secondary text-center"> copyright &copy; UR9 group All rights reserved<span className=" Date px-1 text-warning">{newDay} </span></p>

                    <div class="footer-icon d-flex  align-items-center justify-content-center max-w-100 mx-6 my-4 col-12  "  >

                        {/* eslint-disable-next-line */}
                        <div className="  m-2 py-3  rounded-circle "><a href="https://m.facebook.com/ur9.group" ><i className="  fs-3 iconf fab fa-facebook" style={{ color: "gold" }} ></i></a></div>

                        <div className=" m-2 py-3   rounded-circle"><a href="https://twitter.com/ur9group"  ><i className="  fs-3 iconf fab fa-twitter" style={{ color: "gold" }} ></i></a></div>
                        <div className=" m-2 py-3    rounded-circle"><a href="https://linkedin.com//company/ur9group/"><i className=" fs-3 iconf fab fa-linkedin" style={{ color: "gold" }}></i></a></div>
                        <div className=" m-2 py-3   rounded-circle "><a href="https://instagram.com/ur9group?igshid=YmMTA2M2Y="><i className=" fs-3 fa fa-instagram" style={{ color: "gold" }}></i></a></div>






                    </div>



                </div>






            </div>




        </div>
    );
}

export default Footer;