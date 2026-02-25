import LazyLoad from 'react-lazyload'
import ImageSlider from '../components/carousel';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Details from "../components/Details";
import HeroSection from '../components/HeroSection';
import AboutHero from '../components/Aboutlist';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import Popup from './popup';
import Faq from '../components/faqs';
import Ceo from '../components/ceo';
import PDFDownload from '../components/mydownload';
import ValueCard from '../components/ValueCard';


const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    // hero slides
    // const Sliders = {
    //     backgroundImage: `url(${Slides[currentIndex].backimage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh ",
    //     width: "100%",
    // // clipPath: "ellipse(100% 40% at 50% 40%)",
    // clipPath:"polygon(0 1%, 99% 0, 0% 100%)"




    // About Slides
    const AboutSlides = {
        backgroundImage: `url(${AboutHero[currentIndex].imageUr})`,

        backgroundPosition: "center",
        width: "100%",
        backgroundSize: "cover",
        marginTop: "70px",
        backgroundRepeat: "no-repeat"
    }




    // // Hero SLIDER Images
    // const handlePrevious = () => {
    //     const firstSlide = currentIndex === 0;
    //     const newIndex = firstSlide ? Slides.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }


    // ABOUT HERO

    const handlePrevious2 = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? AboutHero.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }


    useEffect(() => {
        // Reduced animation logic
    }, []);

    // const handleNext = () => {

    //     const lastSlide = currentIndex === Slides.length - 1;
    //     const newIndex = lastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(
    //         newIndex)
    // }

    const handleNext2 = () => {

        const lastSlide = currentIndex === AboutHero.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(
            newIndex)
    }
    // setInterval(() => {
    //     handleNext()
    // }, 15 * 1000);

    setTimeout(() => {

        handleNext2()
    }, 20 * 1000);

    useEffect(() => {
        // Removed AOS init
    }, []);

    return (

        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Welcome to Ur9 group an epitome of luxury and sophistication..." />
                <link rel="canonical" href="/" />

            </Helmet>


            <div className=" Hero-secton" >

                <LazyLoad height={200} offset={100}>

                    <HeroSection />

                </LazyLoad>


                {/* <Popup/> */}

                {/* <div className="  h-sec py-5 " style={Sliders} >
                    <Container className='px-4'>
                        <div className=" d-flex pt-5 align-items-baseline justify-content-end ">
                            <img src="/UI.png" alt="logo " className="pt-4 " style={{ width: "80px" }}></img>
                        </div>

                        <div className="contents  d-flex align-items-baseline justify-content-start pt-5 ">
                            <div className="">
                                <p className=" P-text   mt-3 text-light  fs-5">Welcome to UR9 Group</p>
                                <h1 className=" Hero-text  fw-bolder pt-8 text-white lh-sm   text-uppercase">The Epitome of <span className="text-warning">Luxury </span>  </h1>


                                <button id="batton" class=" rounded-3 p-2 mt-3  fw-normal mb-3"><a className=" hero-i  fs-5  " style={{ textDecoration: 'none', color: '' }} href="/About" target="_blank">LEARN MORE</a></button>

                            </div>
                            <div className='d-flex flex-row p-2  ms-auto mt-auto'>
                                < IoIosArrowBack className="  bg-warning fw-bold rounded-circle  p-1 fs-2" onClick={handlePrevious} />

                                < IoIosArrowForward className="  border border-2 border-light text-warning fw-bold ms-1 rounded-circle p-1 fs-2" onClick={handleNext} />
                            </div>
                        </div>

                    </Container>

                </div> */}



                <div className="services-section w-100 bg-dark py-5 text-light " id="values" >
                    <Container className='px-4'>
                        <div className="row mb-5 mx-1">
                            <div className="col-12 Short-note  align-items-center text-center ">
                                <h3 className="  pt-5 mx-2 fw-bold fs-4 ">Corporate Values
                                </h3>
                                <div className='  mx-auto  rounded-5    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>


                                <div className="  "><p className="   textfield px-2 pt-6 text-light text-center text-wrap  shadow-sm font-normal mx-auto " >  Our core values help us to provide our clients
                                    with the best possible experience</p></div>

                            </div>
                        </div>


                        <div className="row g-4 p-2 p-md-4 rounded-4 mt-2">

                            {Details.map((details, index) => (
                                <ValueCard
                                    key={details.id}
                                    index={index}
                                    image={details.image}
                                    title={details.Tag}
                                    info={details.info}
                                />
                            ))}

                        </div>
                    </Container>

                </div>

                <LazyLoad height={200} offset={100}>

                    <Ceo />

                </LazyLoad>

                {/* End of services section */}





                {/* Services Section*/}

                <div className="About-section " id="About-section" style={{ backgroundColor: '#DADDE4' }} >


                    <LazyLoad height={200} offset={100}>

                        < ImageSlider />

                    </LazyLoad>



                </div>




                <Container className='px-2 my-5 '>

                    {/* About us */}
                    <h3 className='text-dark display-7 fw-bold'>Who We are</h3>
                    <div className='       mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>
                </Container>


                <section className='py-5 h-sec d-flex align-items-center  justify-content-center'
                    style={AboutSlides}>

                    <Container>

                        <Row className='d-flex align-items-center  justify-content-center '>
                            <Col lg={6} md={6}>

                                <div className='d-flex flex-row p-2  align-items-center  justify-content-center mx-auto mt-auto'>
                                    < IoIosArrowBack className="  bg-warning fw-bold rounded-circle  p-1 fs-2" onClick={handlePrevious2} />

                                    < IoIosArrowForward className="  border border-2 border-light text-warning fw-bold ms-1 rounded-circle p-1 fs-2" onClick={handleNext2} />
                                </div>
                            </Col>


                            <Col lg={6} md={6} >
                                <div className='py-4 h-100 it bg-black d-flex flex-row px-3 opacity-75  align-items-center flex-column rounded-2  mx-auto ' >
                                    <div className='    mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>

                                    <h2 className='fw-bold text-light display-7 text-center '>A Diversified and fully Integrated Conglomerate</h2>
                                    <p className="pt-3 prop-text1  text-center fw-light  text-light"> UR9 GROUP is a diversified and fully integrated conglomerate registered with the Corporate Affairs Commission and under the laws of The Federal Republic of Nigeria . We have vibrant operations in Nigeria across a wide range of sectors including Energy, Beverage, Real Estate, Agriculture, Technologies.</p>

                                    <Button variant='warning' className='mb-5'><a className="    " style={{ textDecoration: 'none', color: 'black' }} href="/About">Learn More</a></Button>

                                </div>



                            </Col>

                        </Row>



                    </Container>
                </section>

                <Container className='px-2 my-5 '>

                    <PDFDownload />
                </Container>

                <Container className='px-2'>

                    {/* end of about us */}



                </Container>


                {/* Accademy section */}



                < section className="uacademy  " >

                    <LazyLoad>




                        <div className='w-100  position-relative secimg d-flex align-items-center flex-column justify-content-center h-sec '
                            style={{
                                backgroundImage: "url(/Palawa2.png",
                                backgroundPosition: "center",
                                height: "100vh",
                                backgroundSize: "cover",
                                clipPath: "ellipse(100% 70% at 48% 44%)",
                                backgroundRepeat: "no-repeat"
                            }}>





                            <h2 className='display-7 text-light fw-bold px-4  text-center '>
                                Do You Want to Become A  Real Estate Affiliate?
                            </h2>

                            <h5 className='display-7 text-light fw-medium px-4  text-center '>
                                Join UR9 <span className="pt-5  text-warning fw-bold">ACADEMY</span> Today
                            </h5>
                            <Container className='px-5'>     <p className='text-light text-center mx-auto mw-50 fs-6 pt-3 px-2 '>Join our vibrant community of real estate affiliates for <span className="text-warning fw-bold">FREE</span> and lets build success together.
                            </p>  </Container>


                            <Button variant='warning' className='mt-5'><a className="  fs-5  " style={{ textDecoration: 'none', color: 'black' }} href="https://docs.google.com/forms/d/e/1FAIpQLSeQEctkZqLI0J3OnKrXuRyv-uLb7kHNqFMvRRC547mtVWGjPw/viewform?usp=pp_url">REGISTER TODAY</a></Button>









                        </div>

                    </LazyLoad>
                </section>
                <section className='py-5 '>

                    <Container>
                        <h3 className='text-dark display-7 fw-bold'>Latest events</h3>
                        <div className='       mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>

                        <Row className='d-flex align-items-center  justify-content-center '>
                            <Col lg={6} md={6}>
                                <Link className="fs-3" to="/Blog" style={{ textDecoration: "none", }}>

                                    <div className='w-inherit   h- d-flex align-items-center flex-column justify-content-center  rounded-l h-sec'
                                        style={{


                                            backgroundImage: "url(/newmarsh.jpg)",
                                            height: "80vh",
                                            objectFit: "cover",
                                            borderBottomRightRadius: "",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"

                                        }}>

                                        <h3 className='P-text rounded-3 text-dark py-2  px-4 bg-warning fs-4 fw-medium'>UR9 Updates</h3>



                                        <h4 className=' text-light px-4  text-center '>
                                            Our Latest Updates
                                        </h4>




                                    </div>
                                </Link>
                            </Col>

                            <Col lg={6} md={6} >
                                <div className='py-4 '>
                                    <div className='       mb-4 ' style={{ width: "100px", height: '3px', backgroundColor: "gold" }}></div>

                                    <h3 className='fw-bold '>Why you Should Choose UR9</h3>
                                    <p className="pt-3"> Purchasing your first home is an exciting milestone, but it can also be a daunting process. The real estate market can be complex and competitive, especially for newcomers. To help you on your journey to homeownership,
                                        we have come to make your search for Property, more easy.In the realm of real estate, where every decision shapes your future and every investment holds the promise of prosperity, choosing the right partner is paramount. UR9 Group stands as a beacon of reliability, integrity, and innovation in the ever-evolving landscape of property investment.
                                    </p>

                                </div>



                            </Col>

                        </Row>
                        <section className=''>
                            <Faq />

                        </section>


                    </Container>
                </section>




            </div >


        </>



    );
}

export default Home;