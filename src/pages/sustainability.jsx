import Container from "react-bootstrap/Container";
// import Row from 'react-bootstrap/Row';
// import { Col } from 'react-bootstrap';
import Sustainabel from "../components/sustainable";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Sustainability = () => {


    useEffect(() => {
        setInterval(() => {
            AOS.init({ duration: 1000 });


        }, 2000);

    }, []);


    const [showall, setShowall] = useState(false)

    const handleDisplay = (index) => {

        if (showall === index) {
            return setShowall(null)


        }
        setShowall(index)



    }
    return (

<>
        <Helmet>
        <title>Sustainability</title>
        <meta
         name="description"
      content="Our strives is to promote echo friendly environment."/>

        <link rel="canonical" href="/sustainability" />
      </Helmet>
        <div className="name py-5 " style={{ backgroundColor: '#DADDE4' }}>



            <div className=" d-flex align-items-center justify-content-base h-sec py-5  " style={{ backgroundImage: "url(/Sardinal3.jpg)", backgroundRepeat: "no-repeat", height: "80vh", backgroundSize: "cover" }}  >
                <Container className='px-4'>
                   
                    <div className="contents mt-5  ">
                        <div className=" d-flex flex-column align-items-center justify-content-center">
                            <h1 className=" Hero-text  fw-bolder pt-1 text-white display-5    text-uppercase">SUSTAINABILITY </h1>
                            <p className=" P-text   mt-1 text-light  fs-5"> Our strives is to promote echo friendly environment.  </p>
                            <div className='    rounded-5    -mt-3 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>


                            {/* <button id="batton" class=" rounded-3 p-2 mt-3  fw-normal mb-3"><a className=" hero-i  fs-5  " style={{ textDecoration: 'none', color: '' }} href="/About" target="_blank">Explore</a></button> */}

                        </div>

                    </div>

                </Container>

            </div>

            
            <Container className="px-4  ">
               <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className=" one pt-5 fw-bold display-7 text-wrap  text-left">Our Sustainable development goals centered around,</h2>
                <div className='    rounded-2  mb-5 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
                </div>
              
            <ResponsiveMasonry
    columnsCountBreakPoint={{350:1, 750:2, 900:4}} 
    gutter='5px' >
  
   <Masonry>

                    {Sustainabel.map((services, index) => {
                        return (
                            <div   key={index}
                                className=" p-1"
                                style={{ width: "", backgroundColor: "" }}>

                                <div className="d-flex position-relative bg-dark rounded-3 px-4 py-5 flex-column justify-content-between"
                                    data-aos="slide-up"
                                    style={{ width: "", backgroundColor: "white" }}>
                                    < span className="position-absolute left-50 " onClick={() => handleDisplay(index)} >
                                        {showall === index ? (<IoIosArrowDown className=" border  border-warning rounded-circle  fs-3 text-warning" />) :
                                            (<IoIosArrowUp className=" border border-light rounded-circle  fs-3 text-warning" />)



                                        }


                                    </span>

                                    <div className="d-flex px-4 flex-column align-items-center justify-content-center ">

                                        <div className=" p-1  gold2 image4">
                                            <img className="  w-75  " src={services.symbol} alt="heroimg"></img>

                                        </div>


                                        <h5 className="  text-light px-3 text-center pt-3 ">{services.info}</h5>
                                        <div className='    rounded-5    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>

                                    </div>
                                    {showall === index ? (<p className=" P-text text-center px-3 text-light">{services.Textinfo}</p>) : null}
                                </div>


                            </div>
                        )
                    })}

</Masonry>


    </ResponsiveMasonry>

          

            </Container>

        </div>
        </>
    )
}


export default Sustainability;