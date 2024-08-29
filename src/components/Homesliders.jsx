
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slides from '../components/Herolist';
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




const Homesliders = () => {

    useEffect(() => {
        setInterval(() => {
            AOS.init({ duration: 3000 });

        }, 1000);

    }, []);



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>

            <Carousel responsive={responsive}
                customTransition="all .5s"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                

            >


                {Slides.map((creative, index) => {
                    return (


                        <div className="z-index:-50">


                           
                            <div className='' key={index} data-aos-duration="1500" data-aos="fade-down-right"
                                style=
                                {{
                                    zIndex: "-999",
                                    backgroundImage: `url(${creative.imageUr})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "100vh",
                                    width: "100%",


                                }}>

                                <div className='backdrop py-5 '>
                                    <div className="pe-5 pb-5 d-flex  align-self-end justify-self-start">
                                        <img src="/UI.png" alt="logo " className="pb-5" style={{ width: "80px" }}></img>
                                    </div>
                                    <div className='w-100 mb-2 rounded-medium  h-4 bg-warning' data-aos="slide-right" />
                                    <h1 className='lin-h1   text-center fw-bold text-white shadow-lg' data-aos-duration="1500" data-aos="zoom-in-down">{creative.title}</h1>
                                    <p className=' text-uppercase textfield px-2 pt-6 text-light  text-center text-wrap display-7  shadow-sm font-normal ' data-aos-duration="1500" data-aos="slide-down">{creative.text}</p>
                                    <a href="/project"  className='btn-warning px-4 btn-custom mt-6 py-3 rounded-3 text-decoration-none  transition duration-500 ease-in-out fw-bold ' >LEARN MORE</a>

                                </div>



                            </div>
                        </div>



                    )

                })}




            </Carousel>






        </>
    )
}

export default Homesliders;